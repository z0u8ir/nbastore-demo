/* @ds-bundle: {"format":4,"namespace":"CraftoBoticsDesignSystem_5112d7","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"QuoteBar","sourcePath":"components/data/QuoteBar.jsx"},{"name":"SpecRow","sourcePath":"components/data/SpecRow.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"StepCard","sourcePath":"components/data/StepCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"386cce4a2954","components/core/Button.jsx":"b1714c5eb8a2","components/core/Divider.jsx":"b825b9ebb87a","components/data/QuoteBar.jsx":"1c684a58cb93","components/data/SpecRow.jsx":"db1560a405cc","components/data/StatCard.jsx":"a8ef154acd26","components/data/StepCard.jsx":"a037f3b763de"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CraftoBoticsDesignSystem_5112d7 = window.CraftoBoticsDesignSystem_5112d7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'gold'
}) {
  const tones = {
    gold: {
      color: 'var(--gold)'
    },
    muted: {
      color: 'var(--label)'
    },
    dark: {
      color: 'var(--dark)'
    }
  };
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled
}) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: 'var(--radius-sm)',
    transition: 'opacity var(--duration-fast) var(--ease-standard), background var(--duration-fast) var(--ease-standard)',
    opacity: disabled ? 0.4 : 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  };
  const sizes = {
    sm: {
      fontSize: 13,
      padding: '10px 18px'
    },
    md: {
      fontSize: 15,
      padding: '14px 28px'
    },
    lg: {
      fontSize: 17,
      padding: '18px 36px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--gold)',
      color: 'var(--dark)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--cream)',
      border: '1px solid var(--gold)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--gold)',
      border: '1px solid transparent'
    }
  };
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant]
  };
  return React.createElement('button', {
    style,
    onClick,
    disabled,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.opacity = '0.82';
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.opacity = '1';
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  inset = false
}) {
  return React.createElement('div', {
    style: {
      borderTop: '1px solid var(--border-on-dark)',
      margin: inset ? '0 var(--space-slide-x)' : 0
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/data/QuoteBar.jsx
try { (() => {
function QuoteBar({
  children
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card-on-dark-strong)',
      borderLeft: 'var(--border-w-accent) solid var(--gold)',
      padding: '20px 32px'
    }
  }, React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      fontWeight: 400,
      fontStyle: 'italic',
      color: 'var(--body-dark)',
      lineHeight: 1.5
    }
  }, '"', children, '"'));
}
Object.assign(__ds_scope, { QuoteBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/QuoteBar.jsx", error: String((e && e.message) || e) }); }

// components/data/SpecRow.jsx
try { (() => {
function SpecRow({
  label,
  description,
  last = false
}) {
  return React.createElement('div', {
    style: {
      borderTop: '1px solid var(--border-on-dark)',
      borderBottom: last ? '1px solid var(--border-on-dark)' : 'none',
      padding: '16px 0',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      fontWeight: 700,
      color: 'var(--gold)',
      minWidth: 145,
      flexShrink: 0
    }
  }, label), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 400,
      color: 'var(--body-dark)'
    }
  }, description));
}
Object.assign(__ds_scope, { SpecRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SpecRow.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function StatCard({
  value,
  unit,
  label,
  description,
  accent = 'gold'
}) {
  const accentColor = accent === 'gold' ? 'var(--gold)' : accent === 'muted' ? 'var(--label)' : 'var(--gold-dark)';
  return React.createElement('div', {
    style: {
      flex: 1,
      background: 'var(--surface-card-on-dark)',
      borderTop: `var(--border-w-accent) solid ${accentColor}`,
      padding: '40px 36px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-stat-lg)',
      fontWeight: 700,
      color: accentColor,
      lineHeight: 1
    }
  }, value, unit && React.createElement('span', {
    style: {
      fontSize: '0.5em'
    }
  }, unit)), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-label)',
      fontWeight: 600,
      color: 'var(--cream)',
      letterSpacing: '0.05em',
      textTransform: 'uppercase'
    }
  }, label), description && React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 400,
      color: 'var(--body-dark)',
      lineHeight: 1.5
    }
  }, description));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/StepCard.jsx
try { (() => {
function StepCard({
  number,
  title,
  description,
  icon
}) {
  return React.createElement('div', {
    style: {
      flex: 1,
      background: 'var(--dark)',
      padding: '28px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, React.createElement('div', {}, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-stat-sm)',
      fontWeight: 700,
      color: 'var(--gold)',
      lineHeight: 1
    }
  }, number), React.createElement('div', {
    style: {
      width: 28,
      height: 2,
      background: 'var(--gold)',
      margin: '10px 0'
    }
  }), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-label)',
      fontWeight: 600,
      color: 'var(--cream)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, title)), React.createElement('div', {
    style: {
      height: 140,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, icon), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 400,
      color: 'var(--body-dark)',
      lineHeight: 1.4
    }
  }, description));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StepCard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.QuoteBar = __ds_scope.QuoteBar;

__ds_ns.SpecRow = __ds_scope.SpecRow;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.StepCard = __ds_scope.StepCard;

})();
