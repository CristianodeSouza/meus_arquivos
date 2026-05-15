/**
 * KPG Imóveis - Design System - Paleta de Cores
 *
 * Extraído de: https://www.kpgimoveis.com.br/
 * Data: 12/05/2026
 *
 * Instruções: Preencha com os valores hex do site
 */

// ========================================
// CORES PRIMÁRIAS
// ========================================

export const PRIMARY = {
  /** Cor principal do brand */
  main: '#PLACEHOLDER', // Cor principal do site

  /** Variação clara (hover states) */
  light: '#PLACEHOLDER',

  /** Variação escura (active states) */
  dark: '#PLACEHOLDER',

  /** Contraste para texto sobre cor primária */
  contrast: '#FFFFFF' // ou '#000000'
};

// ========================================
// CORES SECUNDÁRIAS
// ========================================

export const SECONDARY = {
  main: '#PLACEHOLDER',
  light: '#PLACEHOLDER',
  dark: '#PLACEHOLDER',
  contrast: '#FFFFFF'
};

// ========================================
// CORES DE ESTADO
// ========================================

export const STATE = {
  /** Sucesso / Aprovado */
  success: '#PLACEHOLDER', // Geralmente verde

  /** Aviso / Atenção */
  warning: '#PLACEHOLDER', // Geralmente amarelo/laranja

  /** Erro / Rejeitado */
  error: '#PLACEHOLDER', // Geralmente vermelho

  /** Informação */
  info: '#PLACEHOLDER', // Geralmente azul
};

// ========================================
// CORES NEUTRAS
// ========================================

export const NEUTRAL = {
  /** Fundo principal da página */
  background: '#PLACEHOLDER',

  /** Superfícies (cards, containers) */
  surface: '#PLACEHOLDER',

  /** Bordas padrão */
  border: '#PLACEHOLDER',

  /** Texto principal */
  text: {
    primary: '#PLACEHOLDER', // Texto normal
    secondary: '#PLACEHOLDER', // Texto secundário (menos destaque)
    tertiary: '#PLACEHOLDER', // Texto terciário (mínimo destaque)
    disabled: '#PLACEHOLDER', // Texto desabilitado
  },

  /** Cinzas */
  gray: {
    50: '#PLACEHOLDER',
    100: '#PLACEHOLDER',
    200: '#PLACEHOLDER',
    300: '#PLACEHOLDER',
    400: '#PLACEHOLDER',
    500: '#PLACEHOLDER',
    600: '#PLACEHOLDER',
    700: '#PLACEHOLDER',
    800: '#PLACEHOLDER',
    900: '#PLACEHOLDER',
  }
};

// ========================================
// CORES DE LINK
// ========================================

export const LINK = {
  default: '#PLACEHOLDER',
  visited: '#PLACEHOLDER',
  hover: '#PLACEHOLDER',
  active: '#PLACEHOLDER',
};

// ========================================
// CORES PARA IMÓVEIS (Específico KPG)
// ========================================

export const PROPERTY = {
  /** Imóvel disponível */
  available: '#PLACEHOLDER',

  /** Imóvel indisponível/vendido */
  unavailable: '#PLACEHOLDER',

  /** Imóvel em destaque/premium */
  featured: '#PLACEHOLDER',
};

// ========================================
// PALETA COMPLETA (Referência)
// ========================================

export const colors = {
  primary: PRIMARY,
  secondary: SECONDARY,
  state: STATE,
  neutral: NEUTRAL,
  link: LINK,
  property: PROPERTY,
};

export type ColorPalette = typeof colors;

/**
 * Função helper para acessar cores
 *
 * Exemplo:
 * const btnColor = getColor('primary.main');
 * const textColor = getColor('neutral.text.primary');
 */
export function getColor(path: string): string {
  const keys = path.split('.');
  let value: any = colors;

  for (const key of keys) {
    value = value[key];
    if (value === undefined) {
      console.warn(`Color not found: ${path}`);
      return '#000000';
    }
  }

  return value;
}

export default colors;
