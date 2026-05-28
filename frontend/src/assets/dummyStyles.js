// assets/dummyStyles.js

export const bannerStyles = {
  container:
    "relative pt-24 min-h-screen flex items-center justify-center px-6 bg-[#050816] overflow-hidden",

  mainContent:
    "max-w-7xl w-full rounded-[40px] border border-cyan-500/20 bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,255,255,0.08)] p-10",

  grid:
    "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",

  leftContent:
    "space-y-8",

  badge:
    "inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-semibold",

  heading:
    "text-5xl lg:text-7xl font-black uppercase leading-tight",

  headingSpan1:
    "block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",

  headingSpan2:
    "block bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent",

  description:
    "text-lg text-gray-300 leading-relaxed max-w-xl",

  featuresGrid:
    "grid grid-cols-2 gap-4",

  featureItem:
    "flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3",

  featureText:
    "text-gray-200",

  buttonsContainer:
    "flex gap-5 pt-4",

  buttonGetStarted:
    "px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_30px_rgba(0,255,255,0.25)] hover:scale-105 transition-all duration-300",

  buttonViewDemo:
    "px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-gray-200 hover:bg-white/10 transition-all duration-300",

  imageContainer:
    "flex justify-center",

  image:
    "rounded-[30px] border border-cyan-500/20 shadow-[0_0_40px_rgba(0,255,255,0.15)]"
};

// Animation delays
export const animationDelays = {
  delay300: "animation-delay-300",
  delay500: "animation-delay-500",
  delay700: "animation-delay-700",
  delay900: "animation-delay-900"
};

// Custom CSS styles as string (for the style jsx block)
export const customStyles = `
  body {
    background: #050816;
    color: white;
  }

  @keyframes glow {
    0% {
      box-shadow: 0 0 5px rgba(0,255,255,0.2);
    }
    50% {
      box-shadow: 0 0 25px rgba(0,255,255,0.45);
    }
    100% {
      box-shadow: 0 0 5px rgba(0,255,255,0.2);
    }
  }

  .neon-glow {
    animation: glow 3s infinite ease-in-out;
  }

  @keyframes float {
    0%,100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  .animate-float {
    animation: float 5s ease-in-out infinite;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, cyan, violet);
    border-radius: 999px;
  }
`;

// src/assets/dummyStyles.js
export const aboutUsStyles = {

  // Main Container
  container:
    "min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1120] to-[#111827] text-white overflow-hidden",

  // HERO SECTION
  heroSection:
    "relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20",

  heroBackground:
    "absolute inset-0",

  heroImageContainer:
    "absolute inset-0 bg-cover bg-center scale-105",

  heroVignette:
    "absolute inset-0",

  heroTint:
    "absolute inset-0 bg-[#050816]/70",

  heroContent:
    "relative z-10 max-w-5xl mx-auto text-center",

  trustBadge:
    "inline-flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-xl text-cyan-300 text-sm font-semibold mb-8",

  trustIcon:
    "w-4 h-4 fill-current",

  mainHeading:
    "text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent leading-tight",

  subHeading:
    "mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",

  inlineHighlight:
    "text-cyan-300 font-semibold ml-2",

  // Stats
  statsGrid:
    "grid grid-cols-2 md:grid-cols-4 gap-6 mt-16",

  statCard:
    "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 hover:border-cyan-400/30 hover:-translate-y-2 transition-all duration-500",

  statNumber:
    "text-3xl md:text-4xl font-black text-cyan-300",

  // Common Layout
  sectionContainer:
    "py-24 px-6",

  sectionGrid:
    "max-w-7xl mx-auto",

  sectionContentGrid:
    "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",

  // Image
  sectionImageContainer:
    "flex justify-center",

  sectionImage:
    "w-full max-w-md rounded-[40px] border border-cyan-500/20 bg-white/5 backdrop-blur-2xl p-6 shadow-[0_0_40px_rgba(0,255,255,0.06)]",

  // Content
  sectionContent:
    "space-y-8",

  sectionBadge:
    "inline-flex items-center gap-3 px-5 py-3 rounded-full border border-cyan-500/20 bg-cyan-500/10",

  sectionIcon:
    "w-5 h-5",

  sectionBadgeText:
    "text-sm font-semibold tracking-wide text-cyan-300 uppercase",

  sectionTitle:
    "text-4xl md:text-5xl font-black text-white leading-tight",

  sectionDescription:
    "text-lg text-gray-400 leading-relaxed",

  // Features
  featuresContainer:
    "grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4",

  featureItem:
    "flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4",

  featureIcon:
    "flex items-center justify-center",

  featureIconSvg:
    "w-5 h-5",

  featureText:
    "text-gray-300 text-sm",

  // VALUES SECTION
  valuesSection:
    "py-24 px-6 bg-[#070d18]",

  valuesHeader:
    "text-center mb-20",

  valuesBadge:
    "inline-flex items-center gap-3 px-5 py-3 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6",

  valuesBadgeIcon:
    "w-5 h-5 text-violet-300",

  valuesBadgeText:
    "text-violet-300 font-semibold uppercase tracking-wide text-sm",

  valuesTitle:
    "text-5xl font-black bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent",

  valuesSubtitle:
    "mt-6 text-gray-400 text-lg",

  valuesGrid:
    "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8",

  valueCard:
    "relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden hover:border-cyan-400/30 hover:-translate-y-3 transition-all duration-500",

  valueGradient:
    "absolute inset-0 opacity-10 blur-3xl",

  valueCardTitle:
    "relative z-10 text-2xl font-bold text-white mb-4",

  valueCardDescription:
    "relative z-10 text-gray-400 text-sm leading-relaxed mb-6",

  valueFeatures:
    "relative z-10 space-y-3",

  valueFeatureItem:
    "flex items-center gap-3 text-gray-300 text-sm",

  valueFeatureDot:
    "w-2 h-2 rounded-full",

  valueUnderline:
    "absolute bottom-0 left-0 w-full h-1",

  // TEAM
  teamSection:
    "py-24 px-6",

  teamHeader:
    "text-center mb-20",

  teamTitle:
    "text-5xl font-black bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent",

  teamSubtitle:
    "mt-6 text-gray-400 text-lg max-w-2xl mx-auto",

  teamGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",

  teamMember:
    "rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 text-center hover:border-cyan-400/30 hover:-translate-y-3 transition-all duration-500",

  teamImageContainer:
    "flex justify-center mb-6",

  teamImage:
    "w-36 h-36 rounded-full overflow-hidden border-4 border-cyan-500/20",

  teamName:
    "text-2xl font-bold text-white",

  teamRole:
    "mt-2 text-cyan-300 font-medium",

  teamBio:
    "mt-5 text-sm text-gray-400 leading-relaxed",

  // TESTIMONIALS
  testimonialsSection:
    "py-24 px-6 bg-[#070d18]",

  testimonialsHeader:
    "text-center mb-20",

  testimonialsTitle:
    "text-5xl font-black bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent",

  testimonialsSubtitle:
    "mt-6 text-gray-400 text-lg",

  testimonialsGrid:
    "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8",

  testimonialCard:
    "rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-cyan-400/30 transition-all duration-500",

  testimonialStars:
    "flex gap-1 mb-5",

  testimonialStar:
    "w-5 h-5 text-yellow-400 fill-current",

  testimonialText:
    "text-gray-300 leading-relaxed mb-8",

  testimonialAuthor:
    "flex items-center gap-4",

  testimonialAvatar:
    "w-14 h-14 rounded-full object-cover border border-cyan-500/20",

  testimonialAuthorName:
    "font-bold text-white",

  testimonialAuthorRole:
    "text-sm text-gray-400",

  // CTA
  ctaSection:
    "relative py-28 px-6 text-center overflow-hidden",

  ctaOrb1:
    "absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl",

  ctaOrb2:
    "absolute bottom-10 right-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl",

  ctaContent:
    "relative z-10 max-w-4xl mx-auto rounded-[40px] border border-cyan-500/20 bg-white/5 backdrop-blur-2xl p-14",

  ctaTitle:
    "text-5xl font-black text-white",

  ctaDescription:
    "mt-6 text-lg text-gray-400 leading-relaxed",

  ctaButton:
    "inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_35px_rgba(0,255,255,0.18)]",

  ctaButtonIcon:
    "w-5 h-5"
};

// CSS animations (for style jsx)
export const aboutUsAnimations = `

  body{
    background:#050816;
  }

  @keyframes float {
    0%,100%{
      transform:translateY(0px);
    }
    50%{
      transform:translateY(-12px);
    }
  }

  .float-animation{
    animation:float 5s ease-in-out infinite;
  }

  ::-webkit-scrollbar{
    width:8px;
  }

  ::-webkit-scrollbar-thumb{
    background:linear-gradient(to bottom, cyan, violet);
    border-radius:999px;
  }

`;

// Add these to the existing dummyStyles.js file
export const contactStyles = {

  // MAIN
  container:
    "min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1120] to-[#111827] text-white overflow-hidden pt-32 pb-20 px-6",

  mainContainer:
    "max-w-7xl mx-auto",

  // HEADER
  header:
    "text-center mb-20",

  title:
    "text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent",

  // MAIN SECTION
  mainSection:
    "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",

  // FORM CONTAINER
  formContainer:
    "relative rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-[0_0_40px_rgba(0,255,255,0.06)]",

  formGlow1:
    "absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full",

  formGlow2:
    "absolute bottom-0 right-0 w-72 h-72 bg-violet-500/10 blur-3xl rounded-full",

  formGlow3:
    "absolute inset-0 bg-gradient-to-br from-white/5 to-transparent",

  form:
    "relative z-10 p-8 md:p-10",

  formElements:
    "space-y-7",

  // GRID
  formGrid:
    "grid grid-cols-1 md:grid-cols-2 gap-6",

  // FORM GROUP
  formGroup:
    "space-y-3",

  // LABEL
  label:
    "flex items-center gap-2 text-sm font-semibold text-gray-300",

  labelIcon:
    "w-4 h-4",

  // INPUT
  input:
    "w-full rounded-2xl border border-white/10 bg-[#111827]/70 px-5 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300",

  textarea:
    "w-full rounded-2xl border border-white/10 bg-[#111827]/70 px-5 py-4 text-white placeholder:text-gray-500 outline-none resize-none transition-all duration-300",

  select:
    "w-full rounded-2xl border border-white/10 bg-[#111827]/70 px-5 py-4 text-white outline-none transition-all duration-300",

  // INPUT STATES
  inputError:
    "border-red-500 focus:ring-red-500/20",

  errorText:
    "text-red-400 text-sm font-medium",

  // COLORS
  colors: {
    purple: {
      icon: "text-violet-400",
      focus:
        "focus:border-violet-400/40 focus:ring-2 focus:ring-violet-500/10",
      hover:
        "hover:border-violet-400/20",
    },

    blue: {
      icon: "text-cyan-400",
      focus:
        "focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/10",
      hover:
        "hover:border-cyan-400/20",
    },

    green: {
      icon: "text-emerald-400",
      focus:
        "focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-500/10",
      hover:
        "hover:border-emerald-400/20",
    },
  },

  // SUBMIT BUTTON
  submitButton:
    "w-full mt-4 rounded-2xl py-4 flex items-center justify-center gap-3 text-lg font-bold transition-all duration-300",

  submitButtonEnabled:
    "bg-gradient-to-r from-cyan-500 to-violet-600 hover:scale-[1.02] text-white shadow-[0_0_35px_rgba(0,255,255,0.18)]",

  submitButtonDisabled:
    "bg-gray-700 text-gray-400 cursor-not-allowed",

  submitIcon:
    "w-5 h-5",

  spinner:
    "flex items-center gap-3",

  // ANIMATION SIDE
  animationContainer:
    "flex items-center justify-center",

  animationWrapper:
    "relative w-full max-w-xl rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-[0_0_40px_rgba(0,255,255,0.05)]",

  // FOOTER
  footer:
    "mt-20 flex justify-center",

  footerBadge:
    "flex items-center gap-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-xl px-8 py-5",

  footerIcon:
    "w-6 h-6 text-cyan-300",

  footerText:
    "text-gray-300 font-medium"
};

// Add these to your existing assets/dummyStyles.js

export const coursePageStyles = {

  // Main Page
pageContainer:
"min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1120] to-[#111827] px-4 sm:px-6 lg:px-10 pt-32 pb-10",

  // Header
  headerContainer:
    "max-w-7xl mx-auto text-center mb-14",

  headerTransform:
    "inline-block",

  headerTitle:
    "text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent tracking-wide",

  headerSubtitle:
    "mt-5 text-gray-400 text-lg max-w-2xl mx-auto",

  // Search
  searchContainer:
    "mt-10 flex justify-center",

  searchGradient:
    "hidden",

  searchInputContainer:
    "w-full max-w-3xl flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl px-5 py-4 shadow-lg",

  searchIconContainer:
    "text-cyan-400",

  searchIcon:
    "w-5 h-5",

  searchInput:
    "flex-1 bg-transparent outline-none text-white placeholder:text-gray-500",

  clearButton:
    "text-gray-400 hover:text-red-400 transition-colors",

  resultsCount:
    "mt-4 text-gray-400 text-sm",

  // Courses
  coursesGrid:
    "max-w-7xl mx-auto",

  coursesGridContainer:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",

  // Card
  courseCard:
    "group cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-[#0b1120]/80 backdrop-blur-xl hover:border-cyan-400/30 hover:-translate-y-2 transition-all duration-500 shadow-[0_0_25px_rgba(0,255,255,0.05)]",

  courseCardInner:
    "h-full",

  courseCardContent:
    "flex flex-col h-full",

  // Image
  courseImageContainer:
    "relative overflow-hidden",

  courseImage:
    "w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105",

  // Content
  courseInfo:
    "flex flex-col flex-1 p-5",

  courseName:
    "text-xl font-bold text-white line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300 min-h-[56px]",

  // Teacher
  teacherContainer:
    "flex items-center gap-2 mt-4",

  teacherIcon:
    "w-4 h-4 text-cyan-400",

  teacherName:
    "text-sm text-gray-400",

  // Ratings
  ratingContainer:
    "mt-5",

  ratingStars:
    "flex items-center",

  ratingStarsInner:
    "flex items-center",

  // Price
  priceContainer:
    "mt-auto pt-6",

  priceFree:
    "text-2xl font-black text-green-400",

  priceCurrent:
    "text-2xl font-black text-cyan-300",

  priceOriginal:
    "text-sm line-through text-gray-500",

  // Empty State
  noCoursesContainer:
    "col-span-full flex flex-col items-center justify-center py-24",

  noCoursesIcon:
    "w-20 h-20",

  noCoursesTitle:
    "text-2xl font-bold text-white mt-4",

  noCoursesButton:
    "mt-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:scale-105 transition-all duration-300"
};

// Add these to your existing assets/dummyStyles.js

export const myCoursesStyles = {
  pageContainer:
    "min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 py-28 px-4 md:px-8",

  mainContainer: "max-w-7xl mx-auto",

  header:
    "text-4xl md:text-5xl font-black text-center text-white mb-14 tracking-tight",

  grid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",

  courseCard:
    "group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-indigo-500/30 transition-all duration-500 hover:-translate-y-3 cursor-pointer",

  imageContainer:
    "relative overflow-hidden h-56 bg-slate-800",

  courseImage:
    "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",

  courseContent:
    "p-6 flex flex-col gap-5",

  courseName:
    "text-2xl font-bold text-white leading-snug line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300",

  infoContainer:
    "flex flex-col gap-4",

  ratingContainer:
    "flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-4 py-3",

  teacherContainer:
    "flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-400/10 rounded-2xl px-4 py-3",

  teacherIcon:
    "w-5 h-5 text-cyan-300",

  teacherText:
    "text-sm font-medium text-slate-200 truncate",

  viewButton:
    "mt-2 flex items-center justify-center gap-2 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold py-3 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30",

  buttonIcon:
    "w-5 h-5",

  emptyText:
    "text-center text-slate-300 text-lg mt-6",
};

 // Custom styles for MyCourses
export const myCoursesCustomStyles = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(35px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0f172a;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #06b6d4, #4f46e5);
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #22d3ee, #6366f1);
  }
  `;
 


// Custom styles for CoursePage
export const coursePageCustomStyles = `

  @keyframes float {
    0%,100%{
      transform: translateY(0px);
    }
    50%{
      transform: translateY(-15px);
    }
  }

  @keyframes glowPulse {
    0%,100%{
      box-shadow: 0 0 10px rgba(0,255,255,0.15);
    }
    50%{
      box-shadow: 0 0 35px rgba(0,255,255,0.35);
    }
  }

  .animate-float{
    animation: float 5s ease-in-out infinite;
  }

  .animate-glow{
    animation: glowPulse 3s ease-in-out infinite;
  }

  ::-webkit-scrollbar{
    width:8px;
  }

  ::-webkit-scrollbar-thumb{
    background:linear-gradient(to bottom, cyan, violet);
    border-radius:999px;
  }

  @media(max-width:768px){

    .course-title{
      font-size:2.5rem;
      line-height:1.2;
    }

  }
`;

// Add these to the existing dummyStyles.js file
export const facultyStyles = {

  // Main Container
  container:
    "min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1120] to-[#111827] text-white px-6 pt-32 pb-20 overflow-hidden",

  // Header
  header:
    "max-w-5xl mx-auto text-center mb-20",

  title:
    "text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent",

  titleDivider:
    "w-32 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mx-auto mt-6",

  subtitle:
    "mt-8 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed",

  // Faculty Section
  facultySection:
    "max-w-7xl mx-auto",

  facultyContainer:
    "w-full",

  facultyGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",

  // Card
  card:
    "group",

  teacherCard:
    "relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden hover:border-cyan-400/30 hover:-translate-y-3 transition-all duration-500 shadow-[0_0_30px_rgba(0,255,255,0.06)]",

  // Image Section
  imageContainer:
    "relative p-6 pb-0",

  imageWrapper:
    "relative overflow-hidden rounded-[28px]",

  image:
    "w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105",

  // Experience Badge
  experienceBadge:
    "absolute top-10 right-10 z-20",

  experienceBadgeContent:
    "px-4 py-2 rounded-full bg-cyan-500/90 backdrop-blur-xl text-sm font-bold text-white shadow-lg",

  // Teacher Info
  teacherInfo:
    "p-6 pt-5 text-center",

  teacherName:
    "text-2xl font-black text-white group-hover:text-cyan-300 transition-colors duration-300",

  teacherQualification:
    "mt-2 text-cyan-300 font-medium text-sm",

  teacherBio:
    "mt-5 text-gray-400 text-sm leading-relaxed min-h-[90px]",

  // Ratings
  ratingContainer:
    "flex justify-center pb-6",

  starRating:
    "flex items-center gap-1",

  starIcon:
    "w-5 h-5 transition-all duration-300",

  starButtonActive:
    "text-yellow-400 fill-current",

  starButtonInactive:
    "text-gray-600",

  // Socials
  socialContainer:
    "flex items-center justify-center gap-4 pb-8",

  socialIcon:
    "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110",

  socialIconSvg:
    "w-5 h-5",

  socialIconEmail:
    "bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white",

  socialIconLinkedin:
    "bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white",

  socialIconInstagram:
    "bg-pink-500/10 text-pink-400 hover:bg-pink-500 hover:text-white",

  // Animations
  animations: `

    body{
      background:#050816;
    }

    @keyframes floatCard {
      0%,100%{
        transform:translateY(0px);
      }
      50%{
        transform:translateY(-10px);
      }
    }

    .faculty-float:hover{
      animation:floatCard 3s ease-in-out infinite;
    }

    ::-webkit-scrollbar{
      width:8px;
    }

    ::-webkit-scrollbar-thumb{
      background:linear-gradient(to bottom, cyan, violet);
      border-radius:999px;
    }

  `
};

// Add these to your existing assets/dummyStyles.js

export const footerStyles = {

  // Main Footer
  footer:
    "relative bg-[#050816] overflow-hidden border-t border-cyan-500/10",

  container:
    "relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20",

  // Grid
  grid:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14",

  brandSection:
    "space-y-6",

  brandTransform:
    "transition-all duration-500",

  brandContainer:
    "flex items-center gap-3",

  brandGradient:
    "absolute inset-0 bg-cyan-500/10 blur-3xl opacity-30",

  brandTitle:
    "text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent tracking-wide",

  brandDescription:
    "text-gray-400 leading-relaxed text-sm",

  // Section Header
  sectionHeader:
    "text-lg font-bold text-white mb-5 tracking-wide",

  sectionIcon:
    "w-5 h-5 text-cyan-400",

  // Links
  linksList:
    "space-y-4",

  linkItem:
    "group flex items-center gap-3 text-gray-400 hover:text-cyan-300 transition-all duration-300",

  linkIcon:
    "w-4 h-4 group-hover:translate-x-1 transition-transform duration-300",

  // Contact
  contactSpace:
    "space-y-5",

  contactItem:
    "flex items-start gap-4",

  contactIconContainer:
    "w-12 h-12 rounded-2xl bg-white/5 border border-cyan-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.08)]",

  contactIcon:
    "w-5 h-5",

  contactTextContainer:
    "flex flex-col",

  contactTextPrimary:
    "text-gray-300 text-sm",

  contactTextSecondary:
    "text-gray-500 text-xs",

  // Social Section
  socialSection:
    "mt-20 pt-10 border-t border-white/10",

  socialContainer:
    "flex flex-col lg:flex-row items-center justify-between gap-8",

  socialIconsContainer:
    "flex items-center gap-5",

  socialIconLink:
    "group relative",

  socialIconContainer:
    "w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-500 shadow-[0_0_25px_rgba(0,255,255,0.06)]",

  socialIconInner:
    "group-hover:scale-110 transition-transform duration-300",

  socialIcon:
    "w-6 h-6 text-gray-300 group-hover:text-cyan-300 transition-colors duration-300",

  socialTooltip:
    "absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-cyan-500 text-black text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300",

  socialTooltipArrow:
    "hidden",

  // Credit
  designCredit:
    "text-center lg:text-right",

  designCreditContainer:
    "inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl",

  designCreditGradient:
    "hidden",

  designCreditText:
    "text-gray-400 text-sm",

  designCreditLink:
    "text-cyan-300 hover:text-cyan-200 transition-colors duration-300"
};

// Background elements styles
export const footerBackgroundStyles = {

  backgroundContainer:
    "absolute inset-0 overflow-hidden pointer-events-none",

  floatingOrb1:
    "absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-floatSlow",

  floatingOrb2:
    "absolute top-40 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-floatMedium",

  floatingOrb3:
    "absolute bottom-10 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-floatFast",

  floatingOrb4:
    "absolute bottom-20 right-10 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-floatSlow",

  gridOverlay:
    "absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]"
};

// Contact icon background gradients
export const contactIconGradients = {
  address:
    "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",

  phone:
    "bg-gradient-to-br from-violet-500/20 to-pink-500/20",

  email:
    "bg-gradient-to-br from-emerald-500/20 to-cyan-500/20"
};

// Icon colors
export const iconColors = {
  cyan:
    "text-cyan-300",

  purple:
    "text-violet-300",

  emerald:
    "text-emerald-300",

  cyan600:
    "text-cyan-400",

  purple600:
    "text-violet-400",

  emerald600:
    "text-emerald-400"
};

// Custom styles for Footer
export const footerCustomStyles = `

  @keyframes floatSlow {
    0%,100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes floatMedium {
    0%,100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-35px);
    }
  }

  @keyframes floatFast {
    0%,100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  .animate-floatSlow {
    animation: floatSlow 10s ease-in-out infinite;
  }

  .animate-floatMedium {
    animation: floatMedium 7s ease-in-out infinite;
  }

  .animate-floatFast {
    animation: floatFast 5s ease-in-out infinite;
  }

  @media (max-width:640px){

    .animate-floatSlow,
    .animate-floatMedium,
    .animate-floatFast{
      animation:none;
    }
  }
`;

// Add these to the existing dummyStyles.js file
export const homeCoursesStyles = {
  // Main Section
container: `
    w-full
    py-20
    pt-20
    bg-[#020617]
`,

  mainContainer:
    "max-w-7xl mx-auto",

  // Header
  header:
    "flex flex-col items-center justify-center text-center mb-16",

  title:
    "text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent tracking-wide",

  titleIcon:
    "w-8 h-8 text-cyan-400 animate-pulse",

  // Grid
  coursesGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10",

  // Card
  courseCard:
    "group relative rounded-[30px] overflow-hidden border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:-translate-y-3 hover:border-cyan-400/50 transition-all duration-500 shadow-[0_0_30px_rgba(0,255,255,0.08)]",

  // Glow Effect
  glowLayer:
    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-violet-500/10 blur-2xl",

  // Image
  imageContainer:
    "relative overflow-hidden h-56",

  courseImage:
    "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",

  // Overlay
  imageOverlay:
    "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent",

  // Floating Badge
  badge:
    "absolute top-4 left-4 px-4 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-lg text-cyan-300 text-xs font-bold tracking-wider uppercase",

  // Content
  courseInfo:
    "relative z-10 p-6 space-y-4",

  // Course Name
  courseName:
    "text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300",

  // Teacher
  teacherInfo:
    "flex items-center gap-2 text-sm text-gray-400",

  teacherIcon:
    "text-cyan-400",

  teacherName:
    "font-medium text-gray-300",

  // Ratings
  ratingContainer:
    "flex items-center justify-between pt-2",

  starsContainer:
    "flex items-center gap-1",

  interactiveStars:
    "flex items-center gap-1",

  starButton:
    "transition-transform duration-300 hover:scale-125",

  starButtonActive:
    "text-yellow-400",

  starButtonInactive:
    "text-gray-600",

  starIcon:
    "w-4 h-4 fill-current",

  // Price
  pricingContainer:
    "flex items-center gap-3 pt-4 border-t border-white/10",

  freePrice:
    "text-3xl font-black text-green-400",

  salePrice:
    "text-3xl font-black text-green-400",

  originalPrice:
    "text-lg line-through text-gray-500",

  // CTA
  ctaContainer:
    "flex justify-center mt-20",

  ctaWrapper:
    "relative group",

  ctaGlow:
    "absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-500",

  ctaButton:
    "relative px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-lg shadow-[0_0_30px_rgba(0,255,255,0.2)] hover:scale-105 transition-all duration-300",

  ctaButtonContent:
    "flex items-center gap-3",

  ctaText:
    "tracking-wide",

  ctaIcon:
    "w-5 h-5 group-hover:translate-x-1 transition-transform duration-300",

  // Fonts
  fonts: {
    title: "font-[Orbitron]",
    course: "font-[Inter]",
    detail: "font-[Inter]"
  },

  // Animations
  animations: `
    @keyframes floatGlow {
      0%,100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    .floating-glow {
      animation: floatGlow 4s ease-in-out infinite;
    }
  `
};

// Add these to the existing dummyStyles.js file
export const navbarStyles = {
  navbar:
    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",

  navbarVisible: "translate-y-0 opacity-100",
  navbarHidden: "-translate-y-full opacity-0",

  navbarScrolled:
    "bg-black/70 backdrop-blur-2xl border-b border-cyan-500/20 shadow-[0_0_30px_rgba(0,255,255,0.08)] py-2",

  navbarDefault:
    "bg-[#050816] border-b border-white/10 py-3",

  container:
    "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",

  innerContainer:
    "flex items-center justify-between h-14",

  logo:
    "flex items-center gap-3 cursor-pointer",

  logoText:
    "text-2xl font-black bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent tracking-wider",

  desktopNav:
    "hidden lg:flex items-center justify-center flex-1",

  desktopNavContainer:
    "flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-3 py-2 backdrop-blur-xl",

  desktopNavItem:
    "px-4 py-2 rounded-xl transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-300",

  desktopNavItemActive:
    "bg-cyan-500/20 text-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.25)]",

  desktopNavText:
    "text-sm font-semibold text-gray-200",

  authContainer:
    "flex items-center gap-3",

  loginButton:
    "hidden lg:flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300",

  mobileMenuButton:
    "lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-300",

  mobileMenu:
    "lg:hidden transition-all duration-500 overflow-hidden",

  mobileMenuOpen:
    "max-h-[500px] opacity-100 mt-3",

  mobileMenuClosed:
    "max-h-0 opacity-0",

  mobileMenuContainer:
    "bg-[#0b1120]/95 backdrop-blur-2xl rounded-2xl p-4 border border-cyan-500/20",

  mobileMenuItems:
    "space-y-2",

  mobileMenuItem:
    "flex items-center gap-3 p-3 rounded-xl hover:bg-cyan-500/10",

  mobileMenuText:
    "text-gray-200 font-medium"
};


// Add these to your existing assets/dummyStyles.js

export const signUpPageStyles = {
  // Layout and container styles
  pageContainer: "min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 p-4 relative overflow-hidden",

  // Back button
  backButton: "absolute top-6 left-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-800 z-10 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/40 transition-all hover:bg-white hover:shadow-lg",
  backButtonIcon: "w-5 h-5",

  // Main layout
  mainLayout: "w-full pt-20 max-w-6xl flex flex-col md:flex-row lg:flex-row items-center justify-center gap-12",

  // Animation section
  animationContainer: "flex items-center justify-center w-full order-1 md:order-none lg:order-none",
  animationWrapper: "w-full flex justify-center",

  // Form section
  formContainer: "flex items-center justify-center w-full",
  formWrapper: "relative w-full max-w-md",
  formCard: "relative bg-white/90 backdrop-blur-xl rounded-3xl border border-white/60 p-8 shadow-2xl transition-all duration-500",

  // Header
  header: "text-center mb-8 font-[pacifico]",
  title: "text-2xl font-bold text-slate-800 mb-1",
  subtitle: "text-slate-600 text-sm",

  // Form
  form: "space-y-2",
  submitButton: "w-full mt-6 py-3 px-6 bg-gradient-to-r from-blue-400 to-indigo-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl disabled:opacity-50 relative overflow-hidden",
  buttonContent: "relative flex items-center justify-center gap-2",
  buttonIcon: "w-5 h-5",

  // Sign in link
  signinContainer: "mt-6 text-center",
  signinText: "text-slate-600 text-sm font-[pacifico]",
  signinLink: "text-blue-600 font-semibold hover:text-blue-700"
};

// Floating Input styles
export const floatingInputStyles = {
  container: "relative mb-6 group",
  inputWrapper: "relative",
  input: "w-full bg-white/80 backdrop-blur-sm border-0 rounded-2xl pt-6 pb-4 px-4 text-slate-700 placeholder-transparent focus:outline-none focus:ring-2 transition-all duration-300 shadow-lg",
  inputError: "focus:ring-red-400 border-l-4 border-red-400",
  inputNormal: "focus:ring-indigo-300 focus:border-l-4 focus:border-indigo-400",
  label: "absolute left-4 transition-all duration-300 cursor-text font-medium",
  labelFocused: "top-2 text-xs text-indigo-600",
  labelNormal: "top-5 text-sm text-slate-500",
  labelError: "text-red-400",
  iconsContainer: "absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2",
  emailIcon: "w-5 h-5 text-indigo-400",
  passwordToggle: "focus:outline-none cursor-pointer",
  passwordToggleIcon: "w-5 h-5 text-indigo-400",
  dotsContainer: "absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1",
  dot: "w-1 h-1 bg-indigo-400 rounded-full animate-bounce",
  errorContainer: "flex items-center mt-2 text-red-500 text-sm ml-1",
  errorIcon: "w-4 h-4 mr-1 text-yellow-500"
};

// Custom styles for SignUpPage
export const signUpPageCustomStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
  }
  .animate-float { animation: float 6s ease-in-out infinite; }
`;

// Add these to the existing dummyStyles.js file
export const testimonialStyles = {
  // Section
  section:
    "relative py-24 px-6 bg-gradient-to-br from-[#050816] via-[#0b1120] to-[#111827] overflow-hidden",

  container:
    "max-w-7xl mx-auto text-center mb-20 relative z-10",

  // Header Badge
  badge:
    "inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-xl mb-6",

  badgeDot:
    "w-3 h-3 rounded-full bg-cyan-400 animate-pulse",

  badgeText:
    "text-cyan-300 font-semibold tracking-wide uppercase text-sm",

  // Heading
  title:
    "text-5xl md:text-7xl font-black tracking-wide leading-tight",

  titleGradient:
    "bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent",

  subtitle:
    "max-w-3xl mx-auto mt-6 text-lg text-gray-400 leading-relaxed",

  // Grid
  grid:
    "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 relative z-10",

  // Card Wrapper
  cardWrapper:
    "relative group",

  // Glow Border
  glowBorder:
    "absolute -inset-[1px] rounded-[32px] bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-violet-500/40 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700",

  // Card Background
  backgroundPattern:
    "absolute inset-0 rounded-[32px] bg-white/5 backdrop-blur-2xl border border-white/10",

  // Floating Orbs
  floatingElement1:
    "absolute -top-8 -left-8 w-28 h-28 bg-cyan-500/10 rounded-full blur-3xl",

  floatingElement2:
    "absolute -bottom-8 -right-8 w-28 h-28 bg-violet-500/10 rounded-full blur-3xl",

  // Main Card
  card:
    "relative z-10 rounded-[32px] p-8 bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-3 shadow-[0_0_40px_rgba(0,255,255,0.06)] overflow-hidden",

  // Course Badge
  courseBadge:
    "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6",

  courseBadgeDot:
    "w-2 h-2 rounded-full bg-cyan-400",

  courseBadgeText:
    "text-cyan-300 text-sm font-semibold tracking-wide",

  // Quote Icon
  quoteIcon:
    "absolute top-6 right-6 opacity-20",

  quoteIconSvg:
    "w-14 h-14 text-cyan-400",

  // Content
  content:
    "flex items-start gap-4 mb-6",

  // Avatar
  avatarContainer:
    "relative flex-shrink-0",

  avatarWrapper:
    "w-16 h-16 rounded-2xl overflow-hidden border border-cyan-500/20",

  avatarImage:
    "w-full h-full object-cover",

  avatarGlow:
    "absolute inset-0 rounded-2xl bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500",

  // User Info
  userInfo:
    "flex-1 text-left",

  userHeader:
    "flex flex-col gap-1",

  userName:
    "text-xl font-bold text-white",

  userRole:
    "text-sm text-cyan-300 font-medium",

  // Ratings
  ratingContainer:
    "mt-3 flex items-center gap-2",

  starsContainer:
    "flex items-center gap-1",

  star:
    "w-4 h-4",

  starActive:
    "text-yellow-400 fill-current",

  starInactive:
    "text-gray-600",

  // Message
  message:
    "text-gray-300 leading-relaxed text-base mt-6",

  quoteMark:
    "text-cyan-400 text-2xl font-bold mr-1",

  // Footer
  footer:
    "flex items-center justify-between mt-8 pt-5 border-t border-white/10",

  verified:
    "flex items-center gap-2 text-sm text-green-400",

  verifiedIcon:
    "w-4 h-4",

  date:
    "flex items-center gap-2 text-sm text-gray-500",

  dateIcon:
    "w-4 h-4 text-cyan-400",

  // Animations
  animations: `
    @keyframes glowFloat {
      0%,100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-12px);
      }
    }

    @keyframes pulseGlow {
      0%,100% {
        opacity: 0.5;
      }
      50% {
        opacity: 1;
      }
    }

    .floating-glow {
      animation: glowFloat 5s ease-in-out infinite;
    }

    .pulse-glow {
      animation: pulseGlow 3s ease-in-out infinite;
    }

    .card-init {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }

    .avatar-img {
      object-fit: cover;
      object-position: center;
    }
  `
};

// Add these to the existing dummyStyles.js file
export const courseDetailStyles = {
  // Layout & Container
  container: "min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-4 relative overflow-hidden",
  mainContainer: "max-w-7xl mx-auto space-y-8 relative z-10 transition-all duration-1000",
  containerVisible: "opacity-100 translate-y-0",
  containerHidden: "opacity-0 translate-y-8",

  // Back Button
  backButton: "inline-flex cursor-pointer items-center gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-white/80 animate-slideInLeft",
  backIcon: "w-5 h-5",
  backText: "font-medium",

  // Course Header
  header: "text-center space-y-6 relative",
  badge: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm shadow-lg border border-white/50 animate-bounceIn",
  badgeIcon: "w-5 h-5",
  badgeText: "text-sm font-medium bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent",
  title: "text-4xl md:text-6xl font-[Montserrat] font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 leading-tight animate-fadeInUp",

  // Course Overview
  overviewContainer: "max-w-4xl mx-auto",
  overview: "p-6 font-serif rounded-3xl bg-white/40 backdrop-blur-md shadow-xl border border-white/50 hover:border-white/80 transition-all duration-500 animate-slideInUp",
  overviewHeader: "flex items-center gap-3 mb-3",
  overviewIcon: "w-5 h-5 text-indigo-600",
  overviewTitle: "text-lg font-semibold text-gray-800",
  overviewText: "text-gray-700 text-base leading-relaxed text-left",

  // Course Stats
  statsContainer: "flex items-center justify-center gap-8 flex-wrap animate-fadeInUp",
  statItem: "flex items-center gap-3 text-gray-700 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50",
  statIcon: "w-5 h-5 text-indigo-600",
  statText: "font-medium",
  teacherStat: "flex items-center gap-3 text-gray-700 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50 transition-all duration-1000",
  teacherAnimating: "scale-110 bg-indigo-100/50",

  // Main Grid
  mainGrid: "grid font-[pacifico] grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8",

  // Video Player
  videoSection: "xl:col-span-2 space-y-6",
  videoContainer: "rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl overflow-hidden border border-white/50 hover:border-white/80 transition-all duration-500 animate-slideInRight",
  video: "w-full h-[500px] object-cover bg-black rounded-t-3xl",
  iframe: "w-full h-[500px] rounded-t-3xl",
  videoPlaceholder: "w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden rounded-t-3xl",
  videoPlaceholderBg: "absolute inset-0 opacity-20",
  videoPlaceholderOrb1: "absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full mix-blend-overlay filter blur-xl",
  videoPlaceholderOrb2: "absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-overlay filter blur-xl",
  videoPlaceholderContent: "text-center relative z-10",
  videoPlaceholderIcon: "w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm",
  videoPlaceholderPlayIcon: "w-8 h-8 opacity-70",
  videoPlaceholderText: "text-xl mb-2",
  videoPlaceholderSubtext: "text-lg text-gray-300",

  // Video Info
  videoInfo: "p-6",
  videoTitle: "text-2xl font-bold text-gray-800 mb-3",
  videoDescription: "text-gray-600 leading-relaxed",
  videoMeta: "flex items-center gap-3 mt-4",
  durationBadge: "flex items-center gap-2 text-gray-500 bg-gray-100/50 px-3 py-1 rounded-full",
  durationIcon: "w-4 h-4",
  chapterBadge: "text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full border border-indigo-200/50",

  // Completion Button
  completionSection: "mt-6 pt-6 border-t border-gray-200/50",
  completionButton: "inline-flex cursor-pointer items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm",
  completionButtonCompleted: "bg-green-500/20 text-green-700 hover:bg-green-500/30 border border-green-300/50 hover:border-green-400/50",
  completionButtonIncomplete: "bg-indigo-500/20 text-indigo-700 hover:bg-indigo-500/30 border border-indigo-300/50 hover:border-indigo-400/50",
  completionIcon: "w-5 h-5",
  completionText: "text-sm text-gray-500 mt-2",

  // Sidebar
  sidebar: "space-y-6",

  // Course Content
  contentCard: "p-6 rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl border border-white/50 hover:border-white/80 transition-all duration-500 animate-slideInLeft",
  contentHeader: "flex items-center justify-between mb-6",
  contentTitle: "text-xl font-bold text-gray-800",
  freeBadge: "text-sm text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full flex items-center gap-2",
  freeBadgeIcon: "w-4 h-4",
  contentList: "space-y-3 max-h-[600px] overflow-y-auto custom-scrollbar",

  // Lecture Item
  lectureItem: "rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg border border-white/50 hover:border-white/80 transition-all duration-300 animate-fadeInUp",
  lectureHeader: "p-4 cursor-pointer transition-all duration-300",
  lectureHeaderExpanded: "bg-gradient-to-r from-indigo-50/50 to-purple-50/50 border-b border-white/50",
  lectureHeaderCollapsed: "hover:bg-white/70",
  lectureHeaderContent: "flex items-center justify-between",
  lectureLeftSection: "flex items-center gap-3",
  lectureChevron: "transform transition-transform duration-300",
  lectureChevronExpanded: "rotate-180 text-indigo-600",
  lectureChevronCollapsed: "text-gray-500",
  lectureInfo: "",
  lectureTitle: "font-semibold text-gray-800",
  lectureMeta: "text-sm text-gray-500 flex items-center gap-3 mt-1",
  lectureDuration: "flex items-center gap-1",
  lectureChapterCount: "text-xs bg-gray-100/50 px-2 py-1 rounded-full border border-gray-200/50",

  // Chapter List
  chapterList: "p-4 pt-0 space-y-2 animate-fadeIn",
  chapterItem: "p-3 rounded-xl cursor-pointer transition-all duration-300 group",
  chapterSelected: "bg-gradient-to-r from-indigo-100/50 to-purple-100/50 border-2 border-indigo-200/50 shadow-md",
  chapterNotSelected: "bg-white/30 hover:bg-white/50 border border-transparent hover:border-white/50",
  chapterDisabled: "opacity-60",
  chapterContent: "flex items-center justify-between",
  chapterLeftSection: "flex items-center gap-3 flex-1",
  completionToggle: "flex-shrink-0 transition-all duration-300 hover:scale-110",
  completionToggleCompleted: "text-green-500",
  completionToggleIncomplete: "text-gray-400 group-hover:text-gray-600",
  completionIconSmall: "w-5 h-5",
  chapterText: "flex-1",
  chapterName: "font-medium transition-colors duration-300",
  chapterNameSelected: "text-indigo-700",
  chapterNameNotSelected: "text-gray-800",
  chapterTopic: "text-sm text-gray-500",
  chapterDuration: "text-sm text-gray-500 bg-white/50 px-2 py-1 rounded-full border border-white/50",

  // Pricing Card
  pricingCard: "p-6 rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl border border-white/50 hover:border-white/80 transition-all duration-500 animate-slideInLeft",
  pricingHeader: "flex items-center gap-2 mb-4",
  pricingTitle: "font-bold text-lg text-gray-800",
  pricingAmount: "flex items-baseline gap-3 mb-2",
  price: "text-3xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent",
  originalPrice: "text-sm text-gray-500 line-through",
  discountBadge: "ml-auto text-sm bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full border border-green-200/50",
  pricingDescription: "text-sm text-gray-600 mb-6",

  // Enrollment Buttons
  enrollButton: "w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full cursor-pointer font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed",
  freeEnrolledButton: "bg-gradient-to-r from-green-500 to-emerald-500 text-white cursor-default",
  enrollPaidButton: "bg-gradient-to-r from-indigo-400 to-pink-600 text-white",
  enrolledButton: "bg-white border border-green-300 text-green-700 shadow-sm cursor-default",
  enrollSpinner: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin",
  enrollIcon: "w-5 h-5 transition-transform",
  enrollArrow: "ml-auto opacity-80 group-hover:opacity-100",

  // Progress Card
  progressCard: "p-6 rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl border border-white/50 hover:border-white/80 transition-all duration-500 animate-slideInLeft",
  progressHeader: "flex items-center gap-2 mb-4",
  progressIcon: "w-5 h-5 text-indigo-600",
  progressTitle: "font-semibold text-gray-800",
  progressContent: "space-y-4",
  progressBar: "w-full bg-gray-200/50 rounded-full h-3 backdrop-blur-sm",
  progressFill: "bg-gradient-to-r from-indigo-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out shadow-inner",
  progressStats: "grid grid-cols-2 gap-4 text-center",
  progressStat: "p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 hover:bg-white/70 transition-all duration-300",
  progressStatValue: "text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent",
  progressStatLabel: "text-sm text-gray-600 mt-1",

  // Toast
  toast: "fixed top-6 right-6 p-4 rounded-2xl shadow-2xl backdrop-blur-md transform transition-all duration-500 z-50 animate-slideInRight",
  toastError: "bg-red-500/90 text-white",
  toastInfo: "bg-indigo-500/90 text-white",
  toastContent: "flex items-center gap-3",
  toastClose: "hover:scale-110 transition-transform",
  toastCloseIcon: "w-4 h-4",

  // Not Found State
  notFoundContainer: "min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden",
  notFoundContent: "text-center relative z-10",
  notFoundTitle: "text-2xl font-bold",
  notFoundText: "mt-2 text-gray-500",
  notFoundButton: "mt-4 cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg bg-white/10 backdrop-blur-md",

  // Animations
  animations: `
    @keyframes slideInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes bounceIn {
      0% { transform: scale(0.3); opacity: 0; }
      50% { transform: scale(1.05); }
      70% { transform: scale(0.9); }
      100% { transform: scale(1); opacity: 1; }
    }
    .animate-fadeIn {
      animation: fadeIn 0.5s ease-out;
    }
    .animate-slideInUp {
      animation: slideInUp 0.8s ease-out;
    }
    .animate-slideInLeft {
      animation: slideInLeft 0.8s ease-out;
    }
    .animate-slideInRight {
      animation: slideInRight 0.8s ease-out;
    }
    .animate-bounceIn {
      animation: bounceIn 0.8s ease-out;
    }
    .animate-fadeInUp {
      animation: fadeInUp 0.8s ease-out;
    }
    .animation-delay-200 {
      animation-delay: 0.2s;
    }
    .animation-delay-400 {
      animation-delay: 0.4s;
    }
    .animation-delay-300 {
      animation-delay: 0.3s;
    }
    .animation-delay-1000 {
      animation-delay: 1s;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-3000 {
      animation-delay: 3s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(99, 102, 241, 0.4);
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(99, 102, 241, 0.6);
    }
  `
};

// Add these to your existing assets/dummyStyles.js

export const courseDetailStylesH = {
  // Layout and container styles
  pageContainer: "min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-4 relative overflow-x-hidden",
  mainContainer: "max-w-7xl mx-auto space-y-8 relative z-10 transition-all duration-1000",

  // Back button
  backButton: "inline-flex cursor-pointer items-center gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-white/80 animate-slideInLeft",
  backButtonIcon: "w-5 h-5",
  backButtonText: "font-medium",

  // Course header
  headerContainer: "text-center space-y-6 relative",
  courseBadge: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm shadow-lg border border-white/50 animate-bounceIn",
  badgeIcon: "w-5 h-5",
  badgeText: "text-sm font-medium bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent",
  courseTitle: "text-3xl sm:text-4xl md:text-6xl font-[Montserrat] font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 leading-tight animate-fadeInUp",

  // Overview section
  overviewContainer: "max-w-4xl mx-auto",
  overviewCard: "p-6 font-serif rounded-3xl bg-white/40 backdrop-blur-md shadow-xl border border-white/50 hover:border-white/80 transition-all duration-500 animate-slideInUp",
  overviewHeader: "flex items-center gap-3 mb-3",
  overviewIcon: "w-5 h-5 text-indigo-600",
  overviewTitle: "text-lg font-semibold text-gray-800",
  overviewText: "text-gray-700 text-base leading-relaxed text-left",

  // Course stats
  statsContainer: "flex items-center justify-center gap-8 flex-wrap animate-fadeInUp",
  statItem: "flex items-center gap-3 text-gray-700 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50",
  statIcon: "w-5 h-5 text-indigo-600",
  statText: "font-medium",
  teacherStat: "flex items-center gap-3 text-gray-700 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50 transition-all duration-1000",
  teacherIcon: "w-5 h-5 text-indigo-600",
  teacherText: "font-medium font-[pacifico]",

  // Main grid
  mainGrid: "grid font-[pacifico] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8",

  // Video player section
  videoSection: "md:col-span-1 xl:col-span-2 space-y-6",
  videoContainer: "rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl overflow-hidden border border-white/50 hover:border-white/80 transition-all duration-500 animate-slideInRight",
  videoWrapper: "w-full bg-black relative",
  videoFrame: "w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] rounded-t-3xl",
  videoPlaceholder: "w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden rounded-t-3xl",
  videoPlaceholderPattern: "absolute inset-0 opacity-20",
  videoPlaceholderBlob: "absolute w-32 h-32 rounded-full mix-blend-overlay filter blur-xl",
  videoPlaceholderContent: "text-center relative z-10 px-4",
  videoPlaceholderIcon: "w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm",
  videoPlaceholderPlayIcon: "w-8 h-8 opacity-70",
  videoPlaceholderText: "text-xl mb-2",
  videoPlaceholderSubtext: "text-lg text-gray-300",

  // Video info
  videoInfo: "p-6",
  videoTitle: "text-2xl font-bold text-gray-800 mb-3",
  videoDescription: "text-gray-600 leading-relaxed",
  videoMeta: "flex items-center gap-3 mt-4",
  durationBadge: "flex items-center gap-2 text-gray-500 bg-gray-100/50 px-3 py-1 rounded-full",
  durationIcon: "w-4 h-4",
  chapterBadge: "text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full border border-indigo-200",

  // Completion button
  completionSection: "mt-6 pt-6 border-t border-gray-200/50",
  completionButton: "inline-flex cursor-pointer items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm hover:scale-105",
  completionButtonCompleted: "bg-green-500/20 text-green-700 hover:bg-green-500/30 border border-green-300/50 hover:border-green-400/50",
  completionButtonIncomplete: "bg-indigo-500/20 text-indigo-700 hover:bg-indigo-500/30 border border-indigo-300/50 hover:border-indigo-400/50",
  completionIcon: "w-5 h-5",
  completionText: "text-sm text-gray-500 mt-2",

  // Sidebar sections
  sidebar: "space-y-6",
  sidebarCard: "p-6 rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl border border-white/50 hover:border-white/80 transition-all duration-500",

  // Course content
  contentHeader: "flex items-center justify-between mb-6",
  contentTitle: "text-xl font-bold text-gray-800",
  freeAccessBadge: "text-sm text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full flex items-center gap-2",
  freeAccessIcon: "w-4 h-4",
  contentList: "space-y-3 max-h-[320px] sm:max-h-[420px] md:max-h-[600px] overflow-y-auto custom-scrollbar",

  // Lecture item
  lectureItem: "rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg border border-white/50 hover:border-white/80 transition-all duration-300 animate-fadeInUp",
  lectureHeader: "p-4 cursor-pointer transition-all duration-300",
  lectureHeaderExpanded: "bg-gradient-to-r from-indigo-50/50 to-purple-50/50 border-b border-white/50",
  lectureHeaderNormal: "hover:bg-white/70",
  lectureContent: "flex items-center justify-between",
  lectureLeft: "flex items-center gap-3",
  lectureChevron: "transform transition-transform duration-300",
  lectureChevronExpanded: "rotate-180 text-indigo-600",
  lectureChevronNormal: "text-gray-500",
  lectureInfo: "",
  lectureTitle: "font-semibold text-gray-800",
  lectureMeta: "text-sm text-gray-500 flex items-center gap-3 mt-1",
  lectureDuration: "flex items-center gap-1",
  lectureDurationIcon: "w-4 h-4",
  lectureChaptersCount: "text-xs bg-gray-100/50 px-2 py-1 rounded-full border border-gray-200/50",

  // Chapters list
  chaptersList: "p-4 pt-0 space-y-2 animate-fadeIn",
  chapterItem: "p-3 rounded-xl cursor-pointer transition-all duration-300 group",
  chapterItemSelected: "bg-gradient-to-r from-indigo-100/50 to-purple-100/50 border-2 border-indigo-200/50 shadow-md",
  chapterItemNormal: "bg-white/30 hover:bg-white/50 border border-transparent hover:border-white/50",
  chapterContent: "flex items-center justify-between",
  chapterLeft: "flex items-center gap-3 flex-1",
  chapterCompletionButton: "flex-shrink-0 transition-all duration-300 hover:scale-110",
  chapterCompletionCompleted: "text-green-500",
  chapterCompletionNormal: "text-gray-400 group-hover:text-gray-600",
  chapterInfo: "flex-1",
  chapterName: "font-medium transition-colors duration-300",
  chapterNameSelected: "text-indigo-700",
  chapterNameNormal: "text-gray-800",
  chapterTopic: "text-sm text-gray-500",
  chapterDuration: "text-sm text-gray-500 bg-white/50 px-2 py-1 rounded-full border border-white/50",

  // Pricing card
  pricingHeader: "flex items-center gap-2 mb-4",
  pricingTitle: "font-bold text-lg text-gray-800",
  pricingAmount: "flex items-baseline gap-3 mb-2",
  pricingCurrent: "text-3xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent",
  pricingOriginal: "text-sm text-gray-500 line-through",
  pricingDiscount: "ml-auto text-sm bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full border border-green-200/50",
  pricingDescription: "text-sm text-gray-600 mb-6",

  // Enroll button
  enrollButton: "w-full inline-flex cursor-pointer items-center justify-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed",
  enrollButtonFree: "w-full inline-flex items-center justify-center gap-3 px-6 py-2 sm:py-4 md:py-4 lg:py-4 xl:py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-sm cursor-default group",
  enrollButtonEnrolled: "w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-white border border-green-300 text-green-700 font-semibold shadow-sm cursor-default group",
  enrollButtonIcon: "w-5 h-5 transition-transform",
  enrollSpinner: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin",

  // Progress card
  progressHeader: "flex items-center gap-2 mb-4",
  progressIcon: "w-5 h-5 text-indigo-600",
  progressTitle: "font-semibold text-gray-800",
  progressSection: "space-y-4",
  progressBarContainer: "w-full bg-gray-200/50 rounded-full h-3 backdrop-blur-sm",
  progressBar: "bg-gradient-to-r from-indigo-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out shadow-inner",
  progressStats: "grid grid-cols-2 gap-4 text-center",
  progressStat: "p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 hover:bg-white/70 transition-all duration-300",
  progressStatValue: "text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent",
  progressStatLabel: "text-sm text-gray-600 mt-1",

  // Not found page
  notFoundContainer: "min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden",
  notFoundPattern: "absolute inset-0 opacity-10",
  notFoundBlob: "absolute w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-blob",
  notFoundContent: "text-center relative z-10",
  notFoundTitle: "text-2xl font-bold",
  notFoundText: "mt-2 text-gray-500",
  notFoundButton: "mt-4 cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg bg-white/10 backdrop-blur-md"
};

// Toast styles
export const toastStyles = {
  toast: "fixed top-6 right-6 p-4 rounded-2xl shadow-2xl backdrop-blur-md transform transition-all duration-500 z-50 animate-slideInRight",
  toastError: "bg-red-500/90 text-white",
  toastInfo: "bg-indigo-500/90 text-white",
  toastContent: "flex items-center gap-3",
  toastClose: "hover:scale-110 transition-transform",
  toastCloseIcon: "w-4 h-4"
};

// Animation delays
export const animationDelaysH = {
  delay200: "animation-delay-200",
  delay300: "animation-delay-300",
  delay400: "animation-delay-400",
  delay1000: "animation-delay-1000",
  delay2000: "animation-delay-2000",
  delay4000: "animation-delay-4000"
};

// Custom styles for CourseDetail
export const courseDetailCustomStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }

  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }
  .animate-slideInUp {
    animation: slideInUp 0.8s ease-out;
  }
  .animate-slideInLeft {
    animation: slideInLeft 0.8s ease-out;
  }
  .animate-slideInRight {
    animation: slideInRight 0.8s ease-out;
  }
  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out;
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-200 {
    animation-delay: 0.2s;
  }
  .animation-delay-300 {
    animation-delay: 0.3s;
  }
  .animation-delay-400 {
    animation-delay: 0.4s;
  }
  .animation-delay-1000 {
    animation-delay: 1s;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(99, 102, 241, 0.4);
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(99, 102, 241, 0.6);
  }
`;


// Add these to your existing assets/dummyStyles.js

export const loginPageStyles = {
  // Layout and container styles
  pageContainer: "min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-100 relative overflow-hidden",

  // Back button
  backButton: "absolute top-6 left-6 z-10 group",
  backButtonContainer: "flex items-center space-x-2 text-slate-700 hover:text-slate-900 transition-all duration-300 transform hover:translate-x-1",
  backButtonIcon: "p-2 bg-white/70 rounded-full backdrop-blur-sm group-hover:bg-white/90 transition-all duration-300 shadow-sm",
  backButtonArrow: "w-5 h-5",
  backButtonText: "font-semibold",

  // Main content
  mainContent: "relative min-h-screen font-serif flex items-center justify-center p-4",
  contentContainer: "w-full max-w-6xl flex flex-col md:flex-row lg:flex-row items-center justify-center gap-10",

  // Animation section
  animationContainer: "flex flex-1 items-center justify-center w-full mb-8 lg:mb-0",

  // Login card
  cardContainer: "flex-1 flex justify-center w-full",
  cardWrapper: "relative w-full max-w-md",
  cardGlow: "absolute -inset-4 bg-gradient-to-r from-cyan-300 to-purple-300 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition duration-1000 group-hover:duration-200",
  mainCard: "relative bg-white/80 backdrop-blur-xl rounded-2xl border border-white/60 shadow-2xl transform transition-all duration-500",
  cardTopLine: "absolute -top-1 left-8 right-8 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-t-2xl blur-sm",
  cardContent: "p-8",

  // Header
  header: "text-center mb-8",
  title: "text-4xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mb-2 transform hover:scale-110 transition-transform duration-300",
  subtitle: "text-slate-600",

  // Form
  form: "space-y-6",
  formGroup: "group",
  label: "flex items-center space-x-3 text-slate-700 mb-2",
  labelIcon: "w-5 h-5",
  inputContainer: "relative",
  input: "w-full px-4 py-3 pl-12 bg-white/60 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:bg-white/80 focus:ring-2 focus:ring-cyan-200 transition-all duration-300 backdrop-blur-sm",
  passwordInput: "w-full px-4 py-3 pl-12 pr-12 bg-white/60 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:border-purple-400 focus:bg-white/80 focus:ring-2 focus:ring-purple-200 transition-all duration-300 backdrop-blur-sm",
  inputIcon: "absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4",
  passwordToggle: "absolute right-4 cursor-pointer top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors duration-200",
  passwordToggleIcon: "w-4 h-4",

  // Submit button
  submitButton: "w-full py-4 px-6 bg-gradient-to-br from-cyan-100 via-blue-100 text-white font-semibold rounded-full cursor-pointer hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/30 relative overflow-hidden group shadow-lg",
  buttonContent: "flex items-center justify-center space-x-2",
  buttonIcon: "w-5 h-5 text-cyan-500",
  buttonText: "relative text-cyan-500 z-10",

  // Sign up link
  signupContainer: "text-center mt-6 relative z-10",
  signupText: "text-slate-600",
  signupLink: "text-cyan-600 hover:text-cyan-700 font-semibold transition-colors duration-200",

  // Toast notification
  toast: "fixed bottom-6 right-6 bg-white/90 backdrop-blur-xl border border-green-300 shadow-2xl rounded-xl px-6 py-2 flex items-center space-x-3 animate-fade-in-up",
  toastIcon: "text-green-500 w-6 h-6",
  toastContent: "",
  toastTitle: "font-semibold text-green-700",
  toastMessage: "text-sm text-gray-600"
};

// Icon colors
export const loginIconColors = {
  cyan: "text-cyan-500",
  purple: "text-purple-500",
  cyan600: "text-cyan-600",
  purple600: "text-purple-600"
};

// Custom styles for LoginPage
export const loginPageCustomStyles = `
  @keyframes fade-in-up {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in-up {
    animation: fade-in-up 0.5s ease-out;
  }
`;