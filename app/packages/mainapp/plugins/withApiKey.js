const { withInfoPlist, withAndroidManifest, AndroidConfig }  = require('expo/config-plugins')

const withMyApiKey = (config, { apiKey }) => {
  config = withInfoPlist(config, config => {
    config.modResults['MY_CUSTOM_API_KEY'] = apiKey
    return config
  })

  config = withAndroidManifest(config, config => {
    const mainApplication = AndroidConfig.Manifest.getMainApplicationOrThrow(config.modResults)

    AndroidConfig.Manifest.addMetaDataItemToMainApplication(
      mainApplication,
      'MY_CUSTOM_API_KEY',
      apiKey
    )

    return config
  })

  return config
}

module.exports = withMyApiKey