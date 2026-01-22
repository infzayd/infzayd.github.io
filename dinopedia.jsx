import React, { useState } from 'react';
import { Search, Calendar, MapPin, Ruler, Scale, ChevronRight } from 'lucide-react';

const DinoWikipedia = () => {
  const [selectedDino, setSelectedDino] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEra, setSelectedEra] = useState('all');

  const dinosaurs = [
    {
      id: 1,
      name: "Tyrannosaurus Rex",
      scientificName: "Tyrannosaurus rex",
      era: "Late Cretaceous",
      period: "68-66 million years ago",
      location: "North America",
      length: "12-13 meters",
      weight: "8,000-14,000 kg",
      diet: "Carnivore",
      description: "The most famous dinosaur, T. Rex was one of the largest land carnivores of all time. With massive jaws capable of exerting up to 57,000 newtons of force, it could crush bone with ease. Despite its fearsome reputation, recent studies suggest T. Rex may have been covered in primitive feathers.",
      funFact: "T. Rex had excellent vision and could see better than a hawk, making it a formidable predator.",
      emoji: "🦖"
    },
    {
      id: 2,
      name: "Triceratops",
      scientificName: "Triceratops horridus",
      era: "Late Cretaceous",
      period: "68-66 million years ago",
      location: "North America",
      length: "8-9 meters",
      weight: "6,000-12,000 kg",
      diet: "Herbivore",
      description: "With its three distinctive horns and large bony frill, Triceratops is one of the most recognizable dinosaurs. The frill likely served multiple purposes: defense, display, and temperature regulation. These massive herbivores traveled in herds for protection.",
      funFact: "A Triceratops frill could grow up to 2 meters wide, making up nearly a third of its entire body length!",
      emoji: "🦏"
    },
    {
      id: 3,
      name: "Velociraptor",
      scientificName: "Velociraptor mongoliensis",
      era: "Late Cretaceous",
      period: "75-71 million years ago",
      location: "Mongolia, China",
      length: "2 meters",
      weight: "15-20 kg",
      diet: "Carnivore",
      description: "Contrary to popular media portrayals, Velociraptors were actually quite small - about the size of a turkey. However, they were intelligent pack hunters with a large, sickle-shaped claw on each foot. Recent fossil evidence confirms they had feathers.",
      funFact: "Velociraptors were actually much smaller than depicted in movies - only about 2 feet tall at the hip!",
      emoji: "🦅"
    },
    {
      id: 4,
      name: "Brachiosaurus",
      scientificName: "Brachiosaurus altithorax",
      era: "Late Jurassic",
      period: "154-153 million years ago",
      location: "North America",
      length: "25 meters",
      weight: "56,000 kg",
      diet: "Herbivore",
      description: "One of the tallest dinosaurs, Brachiosaurus had front legs longer than its hind legs, giving it a giraffe-like stance. This massive sauropod could reach vegetation up to 13 meters high. Its large nostrils on top of its head led early paleontologists to believe it was aquatic.",
      funFact: "Despite its enormous size, Brachiosaurus had a brain the size of a cat's!",
      emoji: "🦕"
    },
    {
      id: 5,
      name: "Stegosaurus",
      scientificName: "Stegosaurus stenops",
      era: "Late Jurassic",
      period: "155-150 million years ago",
      location: "North America",
      length: "9 meters",
      weight: "5,000 kg",
      diet: "Herbivore",
      description: "Famous for its distinctive double row of large bony plates along its back and spiked tail, Stegosaurus was a slow-moving herbivore. The plates may have been used for temperature regulation and display. Its tail spikes, called thagomizers, were formidable weapons against predators.",
      funFact: "Stegosaurus had a brain the size of a walnut, one of the smallest brain-to-body ratios of any dinosaur!",
      emoji: "🦎"
    },
    {
      id: 6,
      name: "Pteranodon",
      scientificName: "Pteranodon longiceps",
      era: "Late Cretaceous",
      period: "86-84 million years ago",
      location: "North America",
      length: "6 meter wingspan",
      weight: "20-25 kg",
      diet: "Piscivore",
      description: "Though not technically a dinosaur but a pterosaur, Pteranodon was one of the largest flying reptiles. With its distinctive head crest and toothless beak, it soared over ancient seas hunting fish. Its hollow bones and lightweight build allowed for efficient flight despite its impressive size.",
      funFact: "Pteranodon's wingspan was larger than a small airplane, yet it weighed less than a large dog!",
      emoji: "🦇"
    },
    {
      id: 7,
      name: "Spinosaurus",
      scientificName: "Spinosaurus aegyptiacus",
      era: "Mid Cretaceous",
      period: "112-93 million years ago",
      location: "North Africa",
      length: "15 meters",
      weight: "7,000-20,000 kg",
      diet: "Carnivore/Piscivore",
      description: "The largest known carnivorous dinosaur, Spinosaurus had a distinctive sail-like structure on its back formed by elongated vertebrae. Recent discoveries suggest it was semi-aquatic, spending much of its time in water hunting fish with its crocodile-like snout.",
      funFact: "Spinosaurus is the only known dinosaur adapted for a semi-aquatic lifestyle, with paddle-like feet and dense bones!",
      emoji: "🐊"
    },
    {
      id: 8,
      name: "Ankylosaurus",
      scientificName: "Ankylosaurus magniventris",
      era: "Late Cretaceous",
      period: "68-66 million years ago",
      location: "North America",
      length: "6-8 meters",
      weight: "4,000-8,000 kg",
      diet: "Herbivore",
      description: "Built like a living tank, Ankylosaurus was covered in thick armor plates and had a massive club at the end of its tail. This club could swing with enough force to break bones. Its armor was so effective that even T. Rex would have struggled to penetrate it.",
      funFact: "Ankylosaurus's tail club could swing at speeds up to 40 mph, delivering a bone-crushing blow!",
      emoji: "🛡️"
    }
  ];

  const filteredDinos = dinosaurs.filter(dino => {
    const matchesSearch = dino.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dino.scientificName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesEra = selectedEra === 'all' || dino.era === selectedEra;
    return matchesSearch && matchesEra;
  });

  const eras = ['all', 'Late Cretaceous', 'Late Jurassic', 'Mid Cretaceous'];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a1f1a 0%, #1a3a2e 50%, #2d5a45 100%)',
      fontFamily: "'Crimson Text', serif",
      color: '#f5e6d3',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23f5e6d3'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
        animation: 'drift 60s linear infinite'
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Cinzel:wght@700;900&display=swap');
        
        @keyframes drift {
          from { transform: translateX(0) translateY(0); }
          to { transform: translateX(60px) translateY(60px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.3)); }
          50% { filter: drop-shadow(0 0 16px rgba(212, 175, 55, 0.6)); }
        }

        .dino-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          animation: fadeInUp 0.6s ease-out backwards;
        }
        
        .dino-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        
        .era-badge {
          transition: all 0.3s ease;
        }
        
        .era-badge:hover {
          transform: scale(1.05);
          filter: brightness(1.2);
        }
        
        .search-input {
          transition: all 0.3s ease;
        }
        
        .search-input:focus {
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.3);
          border-color: #d4af37;
        }

        .modal-backdrop {
          animation: scaleIn 0.3s ease-out;
        }

        .stat-item {
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: translateX(8px);
          filter: brightness(1.2);
        }
      `}</style>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Header */}
        <header style={{
          textAlign: 'center',
          marginBottom: '60px',
          animation: 'fadeInUp 0.8s ease-out'
        }}>
          <div style={{
            fontSize: '84px',
            marginBottom: '10px',
            animation: 'glow 3s ease-in-out infinite'
          }}>🦕</div>
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '72px',
            fontWeight: 900,
            margin: '0 0 10px 0',
            background: 'linear-gradient(135deg, #d4af37 0%, #f5e6d3 50%, #d4af37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
            letterSpacing: '4px'
          }}>
            DINOSAURIA
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#c4b5a0',
            fontStyle: 'italic',
            letterSpacing: '2px'
          }}>
            Exploring the Mesozoic Era's Magnificent Beasts
          </p>
        </header>

        {/* Search and Filter */}
        <div style={{
          marginBottom: '40px',
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          animation: 'fadeInUp 0.8s ease-out 0.2s backwards'
        }}>
          <div style={{ position: 'relative', flex: '1 1 300px', maxWidth: '500px' }}>
            <Search style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#d4af37',
              width: '20px',
              height: '20px'
            }} />
            <input
              type="text"
              placeholder="Search dinosaurs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              style={{
                width: '100%',
                padding: '16px 16px 16px 48px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '2px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '12px',
                color: '#f5e6d3',
                fontSize: '16px',
                outline: 'none',
                backdropFilter: 'blur(10px)'
              }}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {eras.map(era => (
              <button
                key={era}
                onClick={() => setSelectedEra(era)}
                className="era-badge"
                style={{
                  padding: '10px 20px',
                  background: selectedEra === era 
                    ? 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)'
                    : 'rgba(255, 255, 255, 0.05)',
                  border: selectedEra === era 
                    ? '2px solid #d4af37'
                    : '2px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '25px',
                  color: selectedEra === era ? '#0a1f1a' : '#f5e6d3',
                  fontSize: '14px',
                  fontWeight: selectedEra === era ? 'bold' : 'normal',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                {era === 'all' ? 'All Eras' : era}
              </button>
            ))}
          </div>
        </div>

        {/* Dinosaur Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {filteredDinos.map((dino, index) => (
            <div
              key={dino.id}
              className="dino-card"
              onClick={() => setSelectedDino(dino)}
              style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
                border: '2px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '16px',
                padding: '24px',
                backdropFilter: 'blur(10px)',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div style={{
                fontSize: '48px',
                marginBottom: '12px',
                textAlign: 'center'
              }}>
                {dino.emoji}
              </div>
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '24px',
                fontWeight: 700,
                margin: '0 0 8px 0',
                color: '#d4af37',
                textAlign: 'center'
              }}>
                {dino.name}
              </h3>
              <p style={{
                fontSize: '14px',
                fontStyle: 'italic',
                color: '#c4b5a0',
                textAlign: 'center',
                marginBottom: '16px'
              }}>
                {dino.scientificName}
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                fontSize: '14px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={16} style={{ color: '#d4af37' }} />
                  <span>{dino.era}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={16} style={{ color: '#d4af37' }} />
                  <span>{dino.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Ruler size={16} style={{ color: '#d4af37' }} />
                  <span>{dino.length} long</span>
                </div>
              </div>
              <div style={{
                marginTop: '16px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                color: '#d4af37',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                <span>Learn More</span>
                <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>

        {filteredDinos.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            animation: 'fadeInUp 0.6s ease-out'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>🔍</div>
            <h3 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '28px',
              color: '#d4af37',
              marginBottom: '12px'
            }}>
              No Dinosaurs Found
            </h3>
            <p style={{ fontSize: '18px', color: '#c4b5a0' }}>
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Modal */}
        {selectedDino && (
          <div
            onClick={() => setSelectedDino(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '20px',
              backdropFilter: 'blur(8px)'
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="modal-backdrop"
              style={{
                background: 'linear-gradient(135deg, #0f2922 0%, #1a3a2e 100%)',
                border: '3px solid #d4af37',
                borderRadius: '24px',
                maxWidth: '800px',
                width: '100%',
                maxHeight: '90vh',
                overflow: 'auto',
                padding: '40px',
                position: 'relative',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6)'
              }}
            >
              <button
                onClick={() => setSelectedDino(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(212, 175, 55, 0.2)',
                  border: '2px solid #d4af37',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#d4af37',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#d4af37'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)'}
              >
                ×
              </button>

              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ fontSize: '80px', marginBottom: '16px' }}>
                  {selectedDino.emoji}
                </div>
                <h2 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '42px',
                  fontWeight: 900,
                  margin: '0 0 8px 0',
                  color: '#d4af37'
                }}>
                  {selectedDino.name}
                </h2>
                <p style={{
                  fontSize: '18px',
                  fontStyle: 'italic',
                  color: '#c4b5a0'
                }}>
                  {selectedDino.scientificName}
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '30px'
              }}>
                <div className="stat-item" style={{
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '2px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center'
                }}>
                  <Calendar size={24} style={{ color: '#d4af37', marginBottom: '8px' }} />
                  <div style={{ fontSize: '12px', color: '#c4b5a0', marginBottom: '4px' }}>Era</div>
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{selectedDino.era}</div>
                  <div style={{ fontSize: '12px', color: '#c4b5a0', marginTop: '4px' }}>{selectedDino.period}</div>
                </div>

                <div className="stat-item" style={{
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '2px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center'
                }}>
                  <MapPin size={24} style={{ color: '#d4af37', marginBottom: '8px' }} />
                  <div style={{ fontSize: '12px', color: '#c4b5a0', marginBottom: '4px' }}>Location</div>
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{selectedDino.location}</div>
                </div>

                <div className="stat-item" style={{
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '2px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center'
                }}>
                  <Ruler size={24} style={{ color: '#d4af37', marginBottom: '8px' }} />
                  <div style={{ fontSize: '12px', color: '#c4b5a0', marginBottom: '4px' }}>Length</div>
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{selectedDino.length}</div>
                </div>

                <div className="stat-item" style={{
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '2px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center'
                }}>
                  <Scale size={24} style={{ color: '#d4af37', marginBottom: '8px' }} />
                  <div style={{ fontSize: '12px', color: '#c4b5a0', marginBottom: '4px' }}>Weight</div>
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{selectedDino.weight}</div>
                </div>
              </div>

              <div style={{
                background: 'rgba(212, 175, 55, 0.05)',
                border: '2px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '20px'
              }}>
                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '22px',
                  color: '#d4af37',
                  marginBottom: '12px'
                }}>
                  About
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: '#f5e6d3'
                }}>
                  {selectedDino.description}
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.1) 100%)',
                border: '2px solid #d4af37',
                borderRadius: '12px',
                padding: '20px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>💡</div>
                <h4 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '18px',
                  color: '#d4af37',
                  marginBottom: '8px'
                }}>
                  Fun Fact
                </h4>
                <p style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#f5e6d3',
                  fontStyle: 'italic'
                }}>
                  {selectedDino.funFact}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DinoWikipedia;