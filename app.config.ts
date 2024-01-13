export default defineAppConfig({
  ui: {
    primary: 'indigo',
    gray: 'zinc',
    variables: {
      light: {
        background: 'var(--color-gray-50)',
        foreground: 'var(--color-gray-700)'
      },
      dark: {
        background: 'var(--color-gray-950)',
        foreground: 'var(--color-gray-200)'
      },
      header: {
        height: '4rem'
      }
    },
    icons: {
      dark: 'i-heroicons-moon-20-solid',
      light: 'i-heroicons-sun-20-solid',
      system: 'i-heroicons-computer-desktop-20-solid',
      search: 'i-heroicons-magnifying-glass-20-solid',
      external: 'i-heroicons-arrow-up-right-20-solid',
      chevron: 'i-heroicons-chevron-down-20-solid',
      hash: 'i-heroicons-hashtag-20-solid'
    },
    presets: {
      button: {
        primary: {
          color: 'white',
          variant: 'solid'
        },
        secondary: {
          color: 'gray',
          variant: 'ghost'
        },
        input: {
          color: 'white',
          variant: 'outline',
          ui: {
            font: '',
            color: {
              white: {
                outline: 'ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-gray-300 dark:hover:ring-gray-700 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible-ring-primary-400'
              }
            }
          }
        }
      }
    },
    button: {
      rounded: 'rounded-full',
      default: {
        size: 'md',
        color: 'black'
      },
      icon: {
        size: {
          ex: 'w-20 h-20'
        }
      },
    },
    input: {
      rounded: 'rounded-full'
    },
    header: {
      wrapper: 'lg:!border-transparent bg-cool-800 dark:bg-gray-950',
      links: {
        wrapper: 'ring-1 ring-gray-600 dark:ring-gray-800 px-3 gap-x-0 rounded-full',
        base: 'py-2 px-4 font-bold transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:opacity-0 after:bg-white dark:after:bg-white after:transition-opacity',
        active: 'text-white dark:text-white after:opacity-100',
        inactive: 'text-gray-400 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-200'
      }
    },
    footer: {
      top: {
        wrapper: 'border-t border-gray-600',
        container: 'py-8 lg:py-16'
      },
      bottom: {
        wrapper: 'border-t border-gray-600'
      }
    }
  }
})
