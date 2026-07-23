import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useAppStore } from '../store/useAppStore';
import { MAP_LOCATIONS } from '../data/bibleData';

// Solve Leaflet marker icon issues in bundled environments
import 'leaflet/dist/leaflet.css';

// Custom red dot icon and blue dot icon for premium look
const createMarkerIcon = (isActive: boolean) => {
  return L.divIcon({
    className: 'custom-icon',
    html: `<div class="relative flex items-center justify-center">
      <span class="animate-ping absolute inline-flex h-6 w-6 rounded-full ${isActive ? 'bg-red-400' : 'bg-indigo-400'} opacity-75"></span>
      <div class="relative rounded-full h-4 w-4 ${isActive ? 'bg-red-600 border-white' : 'bg-indigo-600 border-white'} border-2 shadow-md"></div>
    </div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

// Component to dynamically pan and zoom the map
function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom, { animate: true, duration: 0.8 });
  }, [center, zoom, map]);
  return null;
}

export const InteractiveMap: React.FC = () => {
  const { theme, selectedBookId, selectedChapter, layout } = useAppStore();
  const [locations, setLocations] = useState<typeof MAP_LOCATIONS[string][]>([]);
  const [activeLocId, setActiveLocId] = useState<string | null>(null);
  
  // Center of the Middle East (Israel/Palestine area)
  const defaultCenter: [number, number] = [32.3, 35.1];
  const [mapCenter, setMapCenter] = useState<[number, number]>(defaultCenter);
  const [mapZoom, setMapZoom] = useState<number>(8);

  useEffect(() => {
    // Determine which geographic locations are relevant based on selected scripture/book
    const activeLocs: typeof MAP_LOCATIONS[string][] = [];
    
    // Add locations depending on what chapters are active
    if (selectedBookId === 'MAT' || selectedBookId === 'MRK' || selectedBookId === 'LUK') {
      if (selectedChapter === 9 || selectedChapter === 2 || selectedChapter === 5) {
        // Healing of Paralytic was in Capernaum, Galilee, Judea, Jerusalem
        if (MAP_LOCATIONS.capernaum) activeLocs.push(MAP_LOCATIONS.capernaum);
        if (MAP_LOCATIONS.galilee) activeLocs.push(MAP_LOCATIONS.galilee);
        if (MAP_LOCATIONS.judea) activeLocs.push(MAP_LOCATIONS.judea);
        if (MAP_LOCATIONS.jerusalem) activeLocs.push(MAP_LOCATIONS.jerusalem);
      } else {
        if (MAP_LOCATIONS.galilee) activeLocs.push(MAP_LOCATIONS.galilee);
      }
    } else if (selectedBookId === 'JHN') {
      if (selectedChapter === 3) {
        // John 3 occurs in Jerusalem / Judea
        if (MAP_LOCATIONS.jerusalem) activeLocs.push(MAP_LOCATIONS.jerusalem);
        if (MAP_LOCATIONS.judea) activeLocs.push(MAP_LOCATIONS.judea);
      } else {
        if (MAP_LOCATIONS.jerusalem) activeLocs.push(MAP_LOCATIONS.jerusalem);
        if (MAP_LOCATIONS.galilee) activeLocs.push(MAP_LOCATIONS.galilee);
      }
    } else {
      // Default general locations
      Object.values(MAP_LOCATIONS).forEach(loc => activeLocs.push(loc));
    }
    
    setLocations(activeLocs);

    if (activeLocs.length > 0) {
      // Focus on the first location
      setMapCenter([activeLocs[0].latitude, activeLocs[0].longitude]);
      setMapZoom(9);
      setActiveLocId(activeLocs[0].id);
    } else {
      setMapCenter(defaultCenter);
      setMapZoom(8);
      setActiveLocId(null);
    }
  }, [selectedBookId, selectedChapter]);

  const selectLocation = (loc: typeof MAP_LOCATIONS[string]) => {
    setMapCenter([loc.latitude, loc.longitude]);
    setMapZoom(11);
    setActiveLocId(loc.id);
  };

  // Base tile layers
  const lightTiles = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
  const darkTiles = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
  const currentTiles = theme === 'dark' ? darkTiles : lightTiles;

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 sepia-mode:bg-amber-50 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 sepia-mode:border-card">
      <div className="p-3 border-b border-slate-100 dark:border-slate-800 sepia-mode:border-card flex justify-between items-center bg-slate-50/50 dark:bg-slate-950/20">
        <div>
          <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200 sepia-mode:text-amber-900">
            {layout === 'chinese' ? '聖經地理位置' : layout === 'english' ? 'Biblical Geography' : 'Biblical Geography | 聖經地理位置'}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 sepia-mode:text-muted">
            {layout === 'chinese' ? '互動式地圖標記' : layout === 'english' ? 'Interactive Map of Locations Mentioned' : 'Interactive Map of Locations Mentioned | 互動式地圖標記'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 flex-1 min-h-[300px]">
        {/* Map Panel */}
        <div className="md:col-span-2 relative h-full min-h-[250px] w-full bg-slate-100 dark:bg-slate-950">
          <MapContainer 
            center={mapCenter} 
            zoom={mapZoom} 
            scrollWheelZoom={true}
            className="w-full h-full"
            style={{ minHeight: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url={currentTiles}
            />
            <MapController center={mapCenter} zoom={mapZoom} />
            {locations.map((loc) => (
              <Marker 
                key={loc.id} 
                position={[loc.latitude, loc.longitude]}
                icon={createMarkerIcon(activeLocId === loc.id)}
                eventHandlers={{
                  click: () => {
                    setActiveLocId(loc.id);
                  },
                }}
              >
                <Popup>
                  <div className="p-1 font-sans">
                    <h5 className="font-bold text-sm text-indigo-900 dark:text-indigo-400">
                      {layout === 'chinese' ? loc.nameZh : layout === 'english' ? loc.nameEn : `${loc.nameEn} / ${loc.nameZh}`}
                    </h5>
                    {layout !== 'chinese' && (
                      <p className="text-xs mt-1 text-slate-700 dark:text-slate-300 leading-normal font-serif">
                        {loc.descriptionEn}
                      </p>
                    )}
                    {layout !== 'english' && (
                      <p className={`text-xs mt-1 text-slate-500 dark:text-slate-400 font-sans ${layout === 'parallel' ? 'border-t pt-1' : ''}`}>
                        {loc.descriptionZh}
                      </p>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Location Descriptions Panel */}
        <div className="p-4 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800 sepia-mode:border-card flex flex-col overflow-y-auto max-h-[350px] md:max-h-full">
          <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-3">
            {layout === 'chinese' ? '本章地名' : layout === 'english' ? 'Passage Locations' : 'Passage Locations | 本章地名'}
          </span>
          {locations.length === 0 ? (
            <div className="text-center py-8 text-xs text-slate-400 dark:text-slate-500">
              {layout === 'chinese' ? '無此章節的特定地圖標記。' : layout === 'english' ? 'No specific locations mapped for this passage.' : <>No specific locations mapped for this passage.<br />無此章節的特定地圖標記。</>}
            </div>
          ) : (
            <div className="space-y-3">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => selectLocation(loc)}
                  className={`w-full text-left p-3 rounded-lg border text-xs transition-all duration-200 ${
                    activeLocId === loc.id
                      ? 'border-indigo-500 bg-indigo-50/40 dark:bg-indigo-950/20 text-indigo-950 dark:text-indigo-200'
                      : 'border-slate-100 dark:border-slate-800 sepia-mode:border-card hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <div className="font-semibold flex justify-between items-center mb-1">
                    {layout !== 'chinese' && <span>{loc.nameEn}</span>}
                    {layout !== 'english' && <span className="text-indigo-600 dark:text-indigo-400 font-sans">{loc.nameZh}</span>}
                  </div>
                  {layout !== 'chinese' && (
                    <p className="text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-1 font-serif">
                      {loc.descriptionEn}
                    </p>
                  )}
                  {layout !== 'english' && (
                    <p className="text-slate-400 dark:text-slate-500 line-clamp-2 leading-relaxed text-[11px] font-sans">
                      {loc.descriptionZh}
                    </p>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
