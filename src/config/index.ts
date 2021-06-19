let baseConfig = {}
if (process.env.NODE_ENV === 'development') {
  baseConfig = {
    dbString: process.env.DATABASE_URL,
  }
} else if (process.env.NODE_ENV === 'production') {
  baseConfig = {}
}
export default {
  ...baseConfig,
  port: process.env.PORT ?? 3000,
}
