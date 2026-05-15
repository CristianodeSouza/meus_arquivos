/**
 * KPG Imóveis - Design System - Tipografia
 *
 * Extraído de: https://www.kpgimoveis.com.br/
 * Data: 12/05/2026
 *
 * Instruções: Verifique no site as fontes exatas e tamanhos usados
 */

// ========================================
// FONT FAMILIES
// ========================================

export const FONTS = {
  /** Font principal do brand */
  primary: 'PLACEHOLDER', // Geralmente: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, etc

  /** Font secundária (destaques) */
  secondary: 'PLACEHOLDER',

  /** Font monospace (código) */
  mono: 'PLACEHOLDER', // Geralmente: 'Courier New', monospace
};

// ========================================
// FONT SIZES
// ========================================

export const FONT_SIZES = {
  // Tamanhos de título
  h1: 'PLACEHOLDER', // Página principal (px ou rem)
  h2: 'PLACEHOLDER', // Seções principais
  h3: 'PLACEHOLDER', // Subseções
  h4: 'PLACEHOLDER', // Títulos pequenos
  h5: 'PLACEHOLDER', // Mini títulos
  h6: 'PLACEHOLDER', // Labels

  // Tamanhos de corpo
  body: 'PLACEHOLDER', // Texto principal
  bodySmall: 'PLACEHOLDER', // Texto secundário
  bodyTiny: 'PLACEHOLDER', // Texto mínimo

  // Tamanhos especiais
  button: 'PLACEHOLDER', // Botões
  label: 'PLACEHOLDER', // Labels de formulário
  caption: 'PLACEHOLDER', // Captions e footnotes
};

// ========================================
// FONT WEIGHTS
// ========================================

export const FONT_WEIGHTS = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

// ========================================
// LINE HEIGHTS
// ========================================

export const LINE_HEIGHTS = {
  tight: 1.1, // Para títulos
  normal: 1.5, // Para corpo
  relaxed: 1.75, // Para melhor legibilidade
  loose: 2, // Máxima legibilidade
};

// ========================================
// LETTER SPACING
// ========================================

export const LETTER_SPACING = {
  tight: '-0.02em',
  normal: '0em',
  wide: '0.05em',
  wider: '0.1em',
};

// ========================================
// TIPOGRAFIA COMPLETA (Combinações)
// ========================================

export const typography = {
  // Títulos
  heading1: {
    fontSize: FONT_SIZES.h1,
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.tight,
    fontFamily: FONTS.primary,
  },
  heading2: {
    fontSize: FONT_SIZES.h2,
    fontWeight: FONT_WEIGHTS.bold,
    lineHeight: LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.tight,
    fontFamily: FONTS.primary,
  },
  heading3: {
    fontSize: FONT_SIZES.h3,
    fontWeight: FONT_WEIGHTS.semibold,
    lineHeight: LINE_HEIGHTS.tight,
    letterSpacing: LETTER_SPACING.normal,
    fontFamily: FONTS.primary,
  },

  // Corpo
  bodyLarge: {
    fontSize: FONT_SIZES.body,
    fontWeight: FONT_WEIGHTS.normal,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
    fontFamily: FONTS.primary,
  },
  bodyRegular: {
    fontSize: FONT_SIZES.bodySmall,
    fontWeight: FONT_WEIGHTS.normal,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
    fontFamily: FONTS.primary,
  },
  bodySmall: {
    fontSize: FONT_SIZES.bodyTiny,
    fontWeight: FONT_WEIGHTS.normal,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
    fontFamily: FONTS.primary,
  },

  // Botões
  button: {
    fontSize: FONT_SIZES.button,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.wide,
    fontFamily: FONTS.primary,
  },

  // Labels
  label: {
    fontSize: FONT_SIZES.label,
    fontWeight: FONT_WEIGHTS.medium,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
    fontFamily: FONTS.primary,
  },

  // Caption
  caption: {
    fontSize: FONT_SIZES.caption,
    fontWeight: FONT_WEIGHTS.normal,
    lineHeight: LINE_HEIGHTS.normal,
    letterSpacing: LETTER_SPACING.normal,
    fontFamily: FONTS.primary,
  },
};

export type Typography = typeof typography;

export default typography;
