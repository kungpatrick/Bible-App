import React, { useEffect } from 'react';
import { useAppStore } from './store/useAppStore';
import { Navbar } from './components/Navbar';
import { ReadingPane } from './components/ReadingPane';
import { Sidebar } from './components/Sidebar';
import { StrongsModal } from './components/StrongsModal';
import { BookOpen } from 'lucide-react';

export const App: React.FC = () => {
  const { theme, setTheme } = useAppStore();

  // Initialize theme class on html root element
  useEffect(() => {
    // Sync state theme on load
    setTheme(theme);
  }, []);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-slate-50 dark:bg-slate-950 sepia-mode:bg-[#f7f3e9]">
      {/* Header Search & Navigation Bar */}
      <Navbar />

      {/* Main Study Desk Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col overflow-hidden">
        
        {/* Quick welcome hint (fade out later or keep it clean) */}
        <div className="mb-4 shrink-0 flex items-center justify-between">
          <div className="flex items-center space-x-1.5 text-xs text-slate-400 dark:text-slate-500 sepia-mode:text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
            <span>Dashboard</span>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <span>Parallel Reading & Analysis Study Desk</span>
          </div>
          <div className="hidden sm:flex items-center space-x-2 text-[10px] bg-slate-100 dark:bg-slate-800 sepia-mode:bg-card px-2.5 py-1 rounded-full text-slate-500 dark:text-slate-400 sepia-mode:text-muted">
            <BookOpen size={10} />
            <span>Translations: CUV (和合本) & ESV Parallel</span>
          </div>
        </div>

        {/* Dynamic Split Pane Dashboard */}
        <div className="flex-1 grid grid-cols-1 xl:grid-cols-5 gap-6 overflow-hidden min-h-0">
          
          {/* Left Column: Primary Scripture Reading Pane */}
          <div className="xl:col-span-3 flex flex-col min-h-[500px] xl:min-h-0 h-full overflow-hidden">
            <ReadingPane />
          </div>

          {/* Right Column: Structured Resource Sidepane */}
          <div className="xl:col-span-2 flex flex-col min-h-[450px] xl:min-h-0 h-full overflow-hidden">
            <Sidebar />
          </div>

        </div>
      </main>

      {/* Overlays / Modals */}
      <StrongsModal />
    </div>
  );
};

export default App;
