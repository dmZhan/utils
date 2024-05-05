// @ts-check
import dmzj from '@dmzj/eslint-config'

export default dmzj(
  {
    ignores: [
      // eslint ignore globs here
    ],
  },
  {
    rules: {
      'node/prefer-global/process': 'off',
    },
  },
)
