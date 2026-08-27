import projectImg1 from '../assets/image copy.png';
import projectImg2 from '../assets/image.png';
import projectImg3 from '../assets/rabiya photo (2).png';

export const projectsData = [
  {
    id: 'commercial-tower-facade',
    title: 'Commercial Glass Tower Façade',
    category: 'Façade Engineering & 2D/3D Drafting',
    year: '2024',
    client: 'Apex Heights Consultancy',
    services: 'Curtain Wall Detailing, Shop Drawings, Structural Calculations',
    image: projectImg1,
    description: 'Comprehensive 2D shop drawings and 3D Revit elevation models for a 28-story unitized curtain wall glass façade. Developed structural anchor joint details, aluminum extrusion profiles, and thermal barrier specifications.',
    highlights: [
      'Engineered unitized curtain wall glass panel framing with wind-load resistance calculations.',
      'Created 120+ fabrication shop drawings and aluminum extrusion die profile details.',
      'Optimized thermal expansion clearance joints complying with international architectural standards.',
      'Delivered 3D Revit BIM model for seamless coordination with mechanical and structural site teams.'
    ],
    specs: {
      software: 'AutoCAD 2024, Revit Architecture, RHINO 3D',
      buildingType: '28-Story Commercial High-Rise',
      facadeSystem: 'Unitized Double-Glazed Curtain Wall',
      location: 'Dubai, UAE'
    }
  },
  {
    id: 'civil-residential-drafting',
    title: 'High-Rise Residential Structural Plan',
    category: 'AutoCAD Civil Drafting',
    year: '2023',
    client: 'Skyline Civil Construction',
    services: 'AutoCAD 2D Layouts, Foundation Specs, Structural CAD Detailing',
    image: projectImg2,
    description: 'Civil engineering structural layouts, rebar placement schedules, and foundation drafting for a multi-family luxury residential complex. Prepared municipal approval drawings and beam-column junction details.',
    highlights: [
      'Drafted complete RCC structural layout plans including raft foundation and column schedules.',
      'Generated precise bar bending schedules (BBS) reducing steel wastage by 8%.',
      'Coordinated civil site layout elevations and stormwater drainage network blueprints.',
      'Ensured full compliance with Indian Standard (IS) civil building codes.'
    ],
    specs: {
      software: 'AutoCAD Civil 3D, STAAD Pro',
      buildingType: '18-Story Residential Tower',
      facadeSystem: 'Reinforced Concrete & Brick Cladding',
      location: 'Mumbai, India'
    }
  },
  {
    id: 'airport-canopy-detailing',
    title: 'Airport Terminal Canopy Elevation',
    category: 'Aluminum & Glass Detailing',
    year: '2023',
    client: 'Metro Infrastructure',
    services: '3D Modeling, Structural Glazing, Bill of Quantities (BOQ)',
    image: projectImg1,
    description: 'Architectural aluminum composite panel (ACP) cladding and spider glazing structural detailing for an international airport entrance canopy. Included wind load pressure analysis and structural steel truss connection details.',
    highlights: [
      'Modeled 3D spider glazing tension rod assemblies with point-supported glass fittings.',
      'Calculated Bill of Quantities (BOQ) and Material Take-Off (MTO) for aluminum extrusions.',
      'Produced millimetre-precise CNC cutting sheets for exterior ACP panel fabrication.',
      'Integrated rainwater gutter channel details into canopy fascia drawings.'
    ],
    specs: {
      software: 'AutoCAD 2023, 3ds Max, Inventor',
      buildingType: 'Airport Passenger Terminal',
      facadeSystem: 'Spider Glazed Canopy & ACP Cladding',
      location: 'Delhi, India'
    }
  },
  {
    id: 'modern-villa-elevation',
    title: 'Modern Villa Structural & Façade Plan',
    category: 'AutoCAD & Civil Engineering',
    year: '2022',
    client: 'Urban Studio Design',
    services: 'AutoCAD 2D/3D, Site Elevation, Civil Quantity Surveying',
    image: projectImg2,
    description: 'End-to-end civil CAD drafting, structural column placement, and exterior stone and glass façade elevation plans for a contemporary luxury villa.',
    highlights: [
      'Drafted architectural floor plans, cross-sections, and 4-side exterior elevations.',
      'Designed ventilated stone cladding fixings and thermally broken aluminum window frames.',
      'Prepared site grading and boundary wall civil construction working drawings.',
      'Collaborated directly with chief architect and structural engineers for shop approval.'
    ],
    specs: {
      software: 'AutoCAD 2022, SketchUp',
      buildingType: '2-Story Luxury Residential Villa',
      facadeSystem: 'Ventilated Natural Stone & Thermally Broken Windows',
      location: 'Bangalore, India'
    }
  }
];
