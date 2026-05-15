/**
 * KPG Imóveis - Design System - Espaçamento
 *
 * Extraído de: https://www.kpgimoveis.com.br/
 * Data: 12/05/2026
 *
 * Instruções: Verifique os espaçamentos e tamanhos usados no site
 */

// ========================================
// SPACING SCALE (8px base)
// ========================================

export const SPACING = {
  // Base scale (8px increments)
  xs: 'PLACEHOLDER', // 4px ou 0.25rem
  sm: 'PLACEHOLDER', // 8px ou 0.5rem
  md: 'PLACEHOLDER', // 16px ou 1rem
  lg: 'PLACEHOLDER', // 24px ou 1.5rem
  xl: 'PLACEHOLDER', // 32px ou 2rem
  xxl: 'PLACEHOLDER', // 48px ou 3rem
  xxxl: 'PLACEHOLDER', // 64px ou 4rem

  // Aliases (para clareza)
  gutter: 'PLACEHOLDER', // Espaço entre colunas (grid)
  section: 'PLACEHOLDER', // Espaço entre seções
  component: 'PLACEHOLDER', // Espaço entre componentes
};

// ========================================
// BORDER RADIUS
// ========================================

export const BORDER_RADIUS = {
  none: '0px',
  xs: 'PLACEHOLDER', // Geralmente 2-4px
  sm: 'PLACEHOLDER', // 4-8px
  md: 'PLACEHOLDER', // 8-12px
  lg: 'PLACEHOLDER', // 12-16px
  xl: 'PLACEHOLDER', // 16-24px
  full: '9999px', // Completamente arredondado
};

// ========================================
// PADDING (Interno)
// ========================================

export const PADDING = {
  // Componentes pequenos
  button: {
    vertical: 'PLACEHOLDER', // Eixo Y
    horizontal: 'PLACEHOLDER', // Eixo X
  },

  // Componentes médios (cards)
  card: {
    vertical: 'PLACEHOLDER',
    horizontal: 'PLACEHOLDER',
  },

  // Containers/Seções
  section: {
    vertical: 'PLACEHOLDER',
    horizontal: 'PLACEHOLDER',
  },

  // Inputs/Formulários
  input: {
    vertical: 'PLACEHOLDER',
    horizontal: 'PLACEHOLDER',
  },
};

// ========================================
// MARGIN
// ========================================

export const MARGIN = {
  // Entre elementos
  between: 'PLACEHOLDER', // Espaço entre elementos irmãos
  sectionVertical: 'PLACEHOLDER', // Espaço vertical entre seções
  sectionHorizontal: 'PLACEHOLDER', // Espaço horizontal entre seções
};

// ========================================
// GAP (Flex/Grid)
// ========================================

export const GAP = {
  xs: 'PLACEHOLDER', // Pequeno
  sm: 'PLACEHOLDER',
  md: 'PLACEHOLDER',
  lg: 'PLACEHOLDER',
  xl: 'PLACEHOLDER',
};

// ========================================
// CONTAINER WIDTHS (Layout)
// ========================================

export const CONTAINER = {
  /** Largura máxima do container principal */
  maxWidth: 'PLACEHOLDER', // Geralmente 1200px, 1280px ou 100%

  /** Padding horizontal em containers */
  horizontalPadding: 'PLACEHOLDER',

  /** Breakpoints responsivos */
  breakpoints: {
    mobile: 'PLACEHOLDER', // Até ~640px
    tablet: 'PLACEHOLDER', // ~640px até ~1024px
    desktop: 'PLACEHOLDER', // ~1024px+
  },
};

// ========================================
// HEIGHTS
// ========================================

export const HEIGHTS = {
  // Componentes
  buttonSmall: 'PLACEHOLDER',
  buttonMedium: 'PLACEHOLDER',
  buttonLarge: 'PLACEHOLDER',

  // Input/Select
  input: 'PLACEHOLDER',

  // Header/Footer
  header: 'PLACEHOLDER',
  footer: 'PLACEHOLDER',

  // Cards
  cardImage: 'PLACEHOLDER',
  cardSmall: 'PLACEHOLDER',
  cardMedium: 'PLACEHOLDER',
};

// ========================================
// SHADOWS
// ========================================

export const SHADOWS = {
  none: 'none',
  sm: 'PLACEHOLDER', // Sombra pequena
  md: 'PLACEHOLDER', // Sombra média
  lg: 'PLACEHOLDER', // Sombra grande
  xl: 'PLACEHOLDER', // Sombra extra grande
  hover: 'PLACEHOLDER', // Sombra ao hover
};

// ========================================
// TRANSITIONS/ANIMATIONS
// ========================================

export const TRANSITIONS = {
  fast: '150ms', // Feedback rápido
  normal: '300ms', // Padrão
  slow: '500ms', // Transições longas

  easing: {
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    cubic: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// ========================================
// ESPAÇAMENTO COMPLETO (Referência)
// ========================================

export const spacing = {
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  padding: PADDING,
  margin: MARGIN,
  gap: GAP,
  container: CONTAINER,
  heights: HEIGHTS,
  shadows: SHADOWS,
  transitions: TRANSITIONS,
};

export type Spacing = typeof spacing;

export default spacing;
