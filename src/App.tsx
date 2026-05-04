import React, { useState, useMemo } from 'react';
import { Search, MapPin, Star, Heart, Wifi, Battery, Volume2, X, Share2, Navigation, MessageSquare, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CoworkingSpace, FilterState, NoiseLevel } from './types';
import { MOCK_SPACES } from './mockData';

// --- Components ---

const Rating = ({ value }: { value: number }) => (
  <div className="flex items-center gap-1 text-stone-900">
    <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
    <span className="font-bold text-xs">{value}</span>
  </div>
);

const ScoreIndicator = ({ label, score, icon: Icon, max = 5 }: { label: string, score: number, icon: any, max?: number }) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center justify-between text-xs text-stone-400 mb-1 font-bold uppercase tracking-wider">
      <div className="flex items-center gap-1">
        <Icon className="w-3 h-3" />
        <span>{label}</span>
      </div>
      <span className="font-medium text-stone-900">{score}/{max}</span>
    </div>
    <div className="h-1 w-full bg-stone-200 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${(score / max) * 100}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-full bg-black rounded-full"
      />
    </div>
  </div>
);

const NoiseIndicator = ({ level }: { level: NoiseLevel }) => {
  const config = {
    quiet: { color: 'text-green-600 bg-green-50', label: 'Тихо' },
    moderate: { color: 'text-yellow-600 bg-yellow-50', label: 'Умеренно' },
    loud: { color: 'text-red-600 bg-red-50', label: 'Шумно' },
  }[level];

  return (
    <div className={`px-2 py-1 rounded-md flex items-center gap-1.5 ${config.color}`}>
      <Volume2 className="w-3 h-3" />
      <span className="text-[10px] font-bold uppercase tracking-wider">{config.label}</span>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'discover' | 'saved'>('discover');
  const [selectedSpace, setSelectedSpace] = useState<CoworkingSpace | null>(null);
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    city: 'Екатеринбург',
    tags: []
  });

  const availableTags = [
    'Быстрый Wi-Fi', 'Много розеток', 'Тихо', 'Открыто сейчас', 
    'Бюджетно', 'Для звонков', 'Есть кофе', 'Доступ 24/7'
  ];

  const filteredSpaces = useMemo(() => {
    return MOCK_SPACES.filter(space => {
      const matchesSearch = space.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
                           space.neighborhood.toLowerCase().includes(filters.searchQuery.toLowerCase());
      const matchesTags = filters.tags.length === 0 || 
                         filters.tags.every(tag => space.tags.includes(tag));
      return matchesSearch && matchesTags;
    });
  }, [filters]);

  const savedSpaces = useMemo(() => {
    return MOCK_SPACES.filter(space => savedIds.has(space.id));
  }, [savedIds]);

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleTag = (tag: string) => {
    setFilters(prev => ({
      ...prev,
      tags: prev.tags.includes(tag) 
        ? prev.tags.filter(t => t !== tag) 
        : [...prev.tags, tag]
    }));
  };

  return (
    <div className="min-h-screen bg-editorial-bg text-editorial-text font-sans selection:bg-stone-200">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200 px-4 md:px-8 h-18 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-black serif italic tracking-tighter">WorkSpace.</div>
          
          <div className="hidden md:flex relative items-center">
            <div className="absolute left-3 text-stone-400">
               <Search className="w-4 h-4" />
            </div>
            <input 
              type="text" 
              value={filters.searchQuery}
              onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
              placeholder="Найти коворкинг в Екатеринбурге..."
              className="pl-10 pr-4 py-2 bg-stone-100 border-none rounded-full w-80 text-sm focus:ring-2 focus:ring-black/5 outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 text-sm font-medium text-stone-600">
            <button 
              onClick={() => setActiveTab('discover')}
              className={`hover:text-black transition-colors ${activeTab === 'discover' ? 'text-black font-bold border-b-2 border-black pb-1 translate-y-0.5' : ''}`}
            >
              Обзор
            </button>
            <button 
              onClick={() => setActiveTab('saved')}
              className={`hover:text-black transition-colors flex items-center gap-1.5 ${activeTab === 'saved' ? 'text-black font-bold border-b-2 border-black pb-1 translate-y-0.5' : ''}`}
            >
              Избранное
              {savedIds.size > 0 && <span className="bg-black text-white text-[10px] px-1.5 py-0.5 rounded-full">{savedIds.size}</span>}
            </button>
          </div>
          
          <div className="w-8 h-8 rounded-full bg-stone-200 border border-stone-300 hidden md:block"></div>
          
          {/* Mobile Tab Switcher */}
          <div className="md:hidden flex items-center bg-stone-100 p-1 rounded-full border border-stone-200">
            <button 
              onClick={() => setActiveTab('discover')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${activeTab === 'discover' ? 'bg-white shadow-sm text-black' : 'text-stone-400'}`}
            >
              Обзор
            </button>
            <button 
              onClick={() => setActiveTab('saved')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${activeTab === 'saved' ? 'bg-white shadow-sm text-black' : 'text-stone-400'}`}
            >
              Избранное
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <AnimatePresence mode="wait">
          {activeTab === 'discover' ? (
            <motion.div
              key="discover"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              {/* Hero & Search */}
              <div className="space-y-4 py-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-stone-200 pb-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 uppercase tracking-[0.2em] text-[10px] font-black text-stone-400">
                      Открытие • Екатеринбург, Россия
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold serif leading-[0.9] tracking-tighter">
                      Найди свой фокус <br />в городе.
                    </h1>
                  </div>
                  <div className="md:text-right space-y-2 max-w-xs">
                    <p className="text-sm text-stone-500 leading-relaxed">
                      Кураторская подборка коворкингов для глубокой работы, деловых встреч и творчества.
                    </p>
                    <div className="flex md:justify-end gap-1 text-[10px] font-bold uppercase tracking-tight text-stone-400">
                      <span>Проверено</span>
                      <span className="text-stone-300">•</span>
                      <span>Живая атмосфера</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 shrink-0">Фильтры:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFilters(prev => ({ ...prev, tags: [] }))}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                      filters.tags.length === 0 
                        ? 'bg-black border-black text-white' 
                        : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400'
                    }`}
                  >
                    Все места
                  </button>
                  {availableTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                        filters.tags.includes(tag) 
                          ? 'bg-stone-900 border-stone-900 text-white shadow-lg shadow-stone-200' 
                          : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* List of Spaces */}
                <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredSpaces.map((space) => (
                    <motion.div
                      layout
                      key={space.id}
                      onClick={() => setSelectedSpace(space)}
                      className="group bg-white rounded-2xl border border-stone-200 hover:border-stone-400 transition-all cursor-pointer overflow-hidden flex flex-col h-full"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img 
                          src={space.photos[0]} 
                          alt={space.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                        <div className="absolute top-3 right-3 p-1.5 bg-white/90 backdrop-blur rounded-full shadow-sm">
                           <Heart className={`w-3.5 h-3.5 transition-colors ${savedIds.has(space.id) ? 'fill-red-500 text-red-500' : 'text-stone-400'}`} />
                        </div>
                        <div className="absolute bottom-3 left-3 flex gap-2">
                          <span className="px-2 py-0.5 bg-stone-900/80 backdrop-blur text-white text-[10px] font-bold rounded uppercase tracking-tighter">
                            {space.wifiScore}.0 / 5.0
                          </span>
                        </div>
                      </div>

                      <div className="p-4 space-y-3 flex-grow flex flex-col">
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold serif text-lg leading-tight">{space.name}</h3>
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-bold">{space.rating}</span>
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          </div>
                        </div>
                        
                        <p className="text-[11px] text-stone-500 font-medium">
                          {space.neighborhood} • {space.priceLevel * 400} ₽/день
                        </p>

                        <div className="flex flex-wrap gap-1 pt-1 opacity-70">
                          {space.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="px-2 py-0.5 bg-stone-100 text-stone-600 text-[9px] font-bold rounded uppercase tracking-wider">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {filteredSpaces.length === 0 && (
                    <div className="col-span-full py-24 text-center space-y-4">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400">
                        <Info className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Мест не найдено</h3>
                      <p className="text-gray-500">Попробуйте изменить фильтры или запрос.</p>
                      <button 
                        onClick={() => setFilters({ searchQuery: '', city: 'Екатеринбург', tags: [] })}
                        className="text-stone-600 font-bold uppercase text-[10px] tracking-widest hover:underline"
                      >
                        Сбросить фильтры
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="saved"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="space-y-12"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Ваше Избранное</h2>
                <p className="text-gray-500">Сравните ваши любимые места в одной таблице.</p>
              </div>

              {savedSpaces.length > 0 ? (
                <div className="space-y-8">
                  {/* Comparison Table */}
                  <div className="overflow-x-auto rounded-3xl border border-stone-200 bg-white shadow-xl">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-stone-50/50">
                          <th className="p-6 border-b border-stone-100 uppercase text-[10px] tracking-widest font-bold text-stone-400">Место</th>
                          <th className="p-6 border-b border-stone-100 text-center uppercase text-[10px] tracking-widest font-bold text-stone-400">Цена</th>
                          <th className="p-6 border-b border-stone-100 text-center uppercase text-[10px] tracking-widest font-bold text-stone-400">Рейтинг</th>
                          <th className="p-6 border-b border-stone-100 text-center uppercase text-[10px] tracking-widest font-bold text-stone-400">Wi-Fi</th>
                          <th className="p-6 border-b border-stone-100 text-center uppercase text-[10px] tracking-widest font-bold text-stone-400">Розетки</th>
                          <th className="p-6 border-b border-stone-100 text-center uppercase text-[10px] tracking-widest font-bold text-stone-400">Шум</th>
                          <th className="p-6 border-b border-stone-100 text-center uppercase text-[10px] tracking-widest font-bold text-stone-400">Действие</th>
                        </tr>
                      </thead>
                      <tbody>
                        {savedSpaces.map(space => (
                          <tr key={space.id} className="hover:bg-stone-50/50 transition-colors">
                            <td className="p-6 border-b border-stone-100">
                              <div className="flex items-center gap-4">
                                <img src={space.photos[0]} className="w-12 h-12 rounded-xl object-cover shadow-sm" alt="" />
                                <div>
                                  <div className="font-bold serif text-stone-900">{space.name}</div>
                                  <div className="text-[10px] font-bold uppercase tracking-tighter text-stone-400">{space.neighborhood}</div>
                                </div>
                              </div>
                            </td>
                            <td className="p-6 border-b border-stone-100 text-center">
                              <PriceIndicator level={space.priceLevel} />
                            </td>
                            <td className="p-6 border-b border-stone-100 text-center">
                              <div className="flex justify-center"><Rating value={space.rating} /></div>
                            </td>
                            <td className="p-6 border-b border-stone-100 text-center">
                              <span className="font-bold text-stone-900">{space.wifiScore}/5</span>
                            </td>
                            <td className="p-6 border-b border-stone-100 text-center">
                              <span className="font-bold text-stone-900">{space.socketScore}/5</span>
                            </td>
                            <td className="p-6 border-b border-stone-100 text-center">
                               <div className="inline-flex"><NoiseIndicator level={space.noiseLevel} /></div>
                            </td>
                            <td className="p-6 border-b border-stone-100 text-center">
                               <button 
                                 onClick={(e) => toggleSave(space.id, e)}
                                 className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                               >
                                 <X className="w-5 h-5" />
                               </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {savedSpaces.map(space => (
                      <CoworkingCardSmall key={space.id} space={space} onRemove={(e) => toggleSave(space.id, e)} onOpen={() => setSelectedSpace(space)} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="py-32 text-center space-y-6">
                   <div className="w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto text-gray-300">
                     <Heart className="w-12 h-12" />
                   </div>
                   <div className="space-y-2">
                     <h3 className="text-2xl font-bold">Ничего не сохранено</h3>
                     <p className="text-gray-500 max-w-sm mx-auto">Нажмите на сердечко у любого места, чтобы добавить его в список для сравнения.</p>
                   </div>
                   <button 
                    onClick={() => setActiveTab('discover')}
                    className="bg-black text-white px-8 py-3 rounded-2xl font-bold shadow-xl shadow-black/10 hover:bg-stone-800 transition-all"
                   >
                     Перейти к обзору
                   </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedSpace && (
          <SpaceDetailsModal 
            space={selectedSpace} 
            isOpen={!!selectedSpace} 
            onClose={() => setSelectedSpace(null)} 
            onToggleSave={(e) => toggleSave(selectedSpace.id, e)}
            isSaved={savedIds.has(selectedSpace.id)}
          />
        )}
      </AnimatePresence>

      <footer className="bg-white border-t border-stone-200 mt-20 py-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
             <div className="text-2xl font-black serif italic tracking-tighter">WorkSpace.</div>
              <p className="text-sm text-stone-500 leading-relaxed">Кураторский справочник коворкингов для современного профессионала. Реальные данные, проверенные места.</p>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-6">Продукт</h4>
            <ul className="space-y-3 text-sm font-medium text-stone-600">
              <li><a href="#" className="hover:text-black transition-colors">Найти место</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Избранное</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Добавить место</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-6">Города</h4>
            <ul className="space-y-3 text-sm font-medium text-stone-600">
              <li className="text-black font-bold ring-1 ring-stone-900/10 px-2 py-1 rounded inline-block">Екатеринбург</li>
              <li className="mt-2"><a href="#" className="hover:text-black transition-colors">Москва</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Санкт-Петербург</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Казань</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-6">Контакты</h4>
            <ul className="space-y-3 text-sm font-medium text-stone-600">
              <li>editorial@workspace.io</li>
              <li>+7 343 000 00 00</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">
          <p>© 2026 WORKSPACE ЕКАТЕРИНБУРГ.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">Приватность</a>
            <a href="#" className="hover:text-black transition-colors">Условия</a>
            <a href="#" className="hover:text-black transition-colors">Куки</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PriceIndicator({ level, light = false }: { level: number, light?: boolean }) {
  return (
    <div className={`flex items-center gap-0.5 text-xs font-bold ${light ? 'text-white' : 'text-stone-900'}`}>
      {[1, 2, 3, 4].map((i) => (
        <span key={i} className={i <= level ? '' : 'opacity-30'}>₽</span>
      ))}
    </div>
  );
}

interface CoworkingCardSmallProps {
  space: CoworkingSpace;
  onRemove: (e: React.MouseEvent) => void;
  onOpen: () => void;
}

const CoworkingCardSmall: React.FC<CoworkingCardSmallProps> = ({ space, onRemove, onOpen }) => {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-4 relative flex items-center gap-4 group hover:border-stone-400 transition-all cursor-pointer" onClick={onOpen}>
      <img src={space.photos[0]} alt="" className="w-16 h-16 rounded-xl object-cover shadow-sm grayscale group-hover:grayscale-0 transition-all" />
      <div className="flex-grow">
        <h4 className="font-bold serif text-stone-900 group-hover:text-black transition-colors">{space.name}</h4>
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-tighter text-stone-400">
          <Rating value={space.rating} />
          <span>•</span>
          <span>{space.neighborhood}</span>
        </div>
      </div>
      <button 
        onClick={onRemove}
        className="p-2 text-stone-300 hover:text-red-500 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

function SpaceDetailsModal({ space, isOpen, onClose, onToggleSave, isSaved }: { space: CoworkingSpace, isOpen: boolean, onClose: () => void, onToggleSave: (e: any) => void, isSaved: boolean }) {
  const [reviewForm, setReviewForm] = useState({ rating: 5, text: '' });
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
      />
      <motion.div 
        layoutId={`space-${space.id}`}
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white md:text-gray-900 md:bg-gray-100 md:hover:bg-gray-200 rounded-full flex items-center justify-center shadow-lg transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Images */}
        <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-gray-100">
           <img 
            src={space.photos[activePhoto]} 
            className="w-full h-full object-cover transition-opacity duration-500" 
            alt={space.name} 
           />
           <div className="absolute bottom-6 left-6 right-6 flex gap-2">
             {space.photos.map((photo, i) => (
               <button 
                key={i} 
                onClick={() => setActivePhoto(i)}
                className={`w-full h-1 rounded-full transition-all ${i === activePhoto ? 'bg-white' : 'bg-white/40'}`}
               />
             ))}
           </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-grow overflow-y-auto p-6 md:p-12 space-y-12 no-scrollbar">
          
          {/* Header */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">ПРЕМИУМ РАЗМЕЩЕНИЕ</span>
                    <div className="w-1 h-1 bg-stone-300 rounded-full"></div>
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">ОТКРЫТО</span>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                 <button 
                  onClick={onToggleSave}
                  className={`px-5 py-2.5 border rounded-full text-sm font-bold transition-all ${isSaved ? 'bg-black text-white border-black' : 'border-stone-200 text-stone-900 hover:bg-stone-50'}`}
                 >
                    {isSaved ? 'В избранном' : 'В избранное'}
                 </button>
                 <button className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-bold shadow-lg shadow-black/10 hover:bg-stone-800 transition-all">
                    Маршрут
                 </button>
               </div>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-5xl font-bold serif leading-none">{space.name}</h2>
              <p className="text-stone-500 flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                {space.address}
              </p>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <div className="text-[10px] uppercase font-bold text-stone-400 mb-2 tracking-wider">Качество Wi-Fi</div>
              <div className="text-2xl font-bold">{space.wifiScore}.0<span className="text-xs text-stone-400 font-normal">/5.0</span></div>
              <div className="w-full h-1 bg-stone-200 mt-3 rounded-full">
                <div className={`h-full rounded-full ${space.wifiScore >= 4 ? 'bg-green-500' : 'bg-yellow-500'}`} style={{ width: `${(space.wifiScore/5)*100}%` }}></div>
              </div>
            </div>
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <div className="text-[10px] uppercase font-bold text-stone-400 mb-2 tracking-wider">Уровень шума</div>
              <div className="text-2xl font-bold italic serif capitalize">{space.noiseLevel === 'quiet' ? 'Тихо' : space.noiseLevel === 'moderate' ? 'Умеренно' : 'Шумно'}</div>
              <div className="flex gap-1 mt-3">
                <div className={`h-1 w-4 rounded-full ${space.noiseLevel === 'quiet' ? 'bg-green-500' : space.noiseLevel === 'moderate' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                <div className={`h-1 w-4 rounded-full ${space.noiseLevel === 'moderate' || space.noiseLevel === 'loud' ? (space.noiseLevel === 'loud' ? 'bg-red-500' : 'bg-yellow-500') : 'bg-stone-200'}`}></div>
                <div className={`h-1 w-4 rounded-full ${space.noiseLevel === 'loud' ? 'bg-red-500' : 'bg-stone-200'}`}></div>
              </div>
            </div>
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <div className="text-[10px] uppercase font-bold text-stone-400 mb-2 tracking-wider">Розетки</div>
              <div className="text-2xl font-bold">{space.socketScore >= 4 ? 'Много' : 'Средне'}</div>
              <div className="text-[10px] text-stone-400 mt-1 uppercase font-bold">Стандартная доступность</div>
            </div>
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <div className="text-[10px] uppercase font-bold text-stone-400 mb-2 tracking-wider">Для звонков</div>
              <div className="text-2xl font-bold">{space.callFriendly ? 'Да' : 'Ограничено'}</div>
              <div className="text-[10px] text-stone-400 mt-1 uppercase font-bold">Zoom-румы: 4</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 border-b border-stone-100 pb-3">Атмосфера</h3>
              <p className="text-stone-600 leading-relaxed serif text-lg italic">"{space.description}"</p>
              
              <div className="space-y-2">
                <h4 className="text-[10px] font-black uppercase text-stone-400">Удобства</h4>
                <div className="flex flex-wrap gap-2">
                  {space.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-stone-100 text-stone-700 text-[10px] font-bold rounded-lg uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            </section>

            <section className="space-y-6">
               <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 border-b border-stone-100 pb-3">Рекомендуется для</h3>
               <div className="grid grid-cols-1 gap-2">
                 {space.bestFor.map((item, idx) => {
                   const colors = [
                     'bg-orange-50 text-orange-700 border-orange-100',
                     'bg-blue-50 text-blue-700 border-blue-100',
                     'bg-green-50 text-green-700 border-green-100'
                   ];
                   return (
                    <span key={item} className={`px-4 py-3 ${colors[idx % 3]} text-xs font-bold rounded-xl border flex items-center gap-3`}>
                      <span className="text-lg">{idx === 0 ? '🔥' : idx === 1 ? '📞' : '☕'}</span>
                      {item}
                    </span>
                   );
                 })}
               </div>

               <div className="space-y-4 mt-8">
                 <h4 className="text-[10px] font-black uppercase text-stone-400">Цены</h4>
                 <div className="space-y-3">
                   <div className="flex justify-between text-sm font-medium">
                     <span className="text-stone-400">Дневной тариф</span>
                     <span className="font-bold">{space.priceLevel * 400} ₽</span>
                   </div>
                   <div className="flex justify-between text-sm font-medium">
                     <span className="text-stone-400">Недельный абонемент</span>
                     <span className="font-bold">{space.priceLevel * 2000} ₽</span>
                   </div>
                 </div>
               </div>
            </section>
          </div>

          {/* Reviews */}
          <section className="space-y-8 pt-12 border-t border-stone-100">
             <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-8 border-b border-stone-100 pb-3">Главное из отзывов</h3>

             <div className="space-y-6">
                {space.reviews.length > 0 ? space.reviews.map(review => (
                  <div key={review.id} className="bg-stone-50 p-6 rounded-2xl relative italic text-sm text-stone-600 border border-stone-100">
                    <span className="absolute top-2 left-2 text-stone-100 text-6xl serif select-none opacity-50">"</span>
                    <p className="relative z-10 leading-relaxed serif text-base">
                      {review.text}
                    </p>
                    <div className="mt-6 flex items-center justify-between not-italic">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-stone-200 border border-stone-300"></div>
                        <span className="text-[10px] font-bold uppercase tracking-tighter text-stone-900">{review.userName}</span>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-stone-200'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                )) : (
                  <div className="text-center py-12 border-2 border-dashed border-stone-100 rounded-3xl">
                    <p className="text-stone-300 font-bold uppercase text-[10px] tracking-widest">Пока нет отзывов</p>
                  </div>
                )}
             </div>

             <button className="w-full py-4 border-2 border-dashed border-stone-200 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 hover:border-stone-400 hover:text-stone-600 transition-all">
                Оставить отзыв
             </button>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

function FeatureBox({ icon: Icon, label, active }: { icon: any, label: string, active: boolean }) {
  return (
    <div className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${active ? 'bg-white border-stone-100 shadow-sm' : 'bg-stone-50 border-transparent opacity-30 grayscale'}`}>
       <Icon className={`w-4 h-4 ${active ? 'text-black' : 'text-stone-300'}`} />
       <span className="text-[9px] font-black text-stone-900 uppercase tracking-widest text-center">{label}</span>
    </div>
  );
}
