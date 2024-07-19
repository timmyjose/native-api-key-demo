import ExpoModulesCore

public class ExpoNativeConfigurationModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoNativeConfiguration")

    Function("getApiKey") { () in 
      return Bundle.main.object(forInfoDictionaryKey: "MY_CUSTOM_API_KEY") as? String
    }
  }
}