/**
 * KPG Imóveis - Design System
 *
 * Exporta todos os tokens de design em um único ponto de entrada
 */

export { colors, PRIMARY, SECONDARY, STATE, NEUTRAL, LINK, PROPERTY, getColor } from './colors';
export type { ColorPalette } from './colors';

export { typography, FONTS, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS, LETTER_SPACING } from './typography';
export type { Typography } from './typography';

export {
  spacing,
  SPACING,
  BORDER_RADIUS,
  PADDING,
  MARGIN,
  GAP,
  CONTAINER,
  HEIGHTS,
  SHADOWS,
  TRANSITIONS,
} from './spacing';
export type { Spacing } from './spacing';

/**
 * Exemplo de uso:
 *
 * // Importar tudo
 * import { colors, typography, spacing } from '@/design-system';
 *
 * // Usar cores
 * const primaryColor = colors.primary.main;
 * const successColor = colors.state.success;
 *
 * // Usar tipografia
 * const headingStyle = typography.heading1;
 * const bodyStyle = typography.bodyLarge;
 *
 * // Usar espaçamento
 * const padding = spacing.spacing.md;
 * const borderRadius = spacing.borderRadius.md;
 *
 * // Helper para cores com path
 * import { getColor } from '@/design-system';
 * const textColor = getColor('neutral.text.primary');
 */

/**
 * Design Tokens Exportados:
 *
 * CORES:
 * - PRIMARY: Cores primárias do brand
 * - SECONDARY: Cores secundárias
 * - STATE: Estados (sucesso, aviso, erro, info)
 * - NEUTRAL: Cores neutras e cinzas
 * - LINK: Estados de links
 * - PROPERTY: Cores específicas para imóveis
 *
 * TIPOGRAFIA:
 * - FONTS: Famílias de fonte
 * - FONT_SIZES: Tamanhos de fonte
 * - FONT_WEIGHTS: Pesos de fonte
 * - LINE_HEIGHTS: Altura de linha
 * - LETTER_SPACING: Espaçamento entre letras
 *
 * ESPAÇAMENTO:
 * - SPACING: Escala de espaçamento
 * - BORDER_RADIUS: Raio de borda
 * - PADDING: Padding interno
 * - MARGIN: Margens
 * - GAP: Gap em flex/grid
 * - CONTAINER: Larguras de container
 * - HEIGHTS: Alturas de componentes
 * - SHADOWS: Sombras
 * - TRANSITIONS: Animações
 */
