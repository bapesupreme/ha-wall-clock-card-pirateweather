import { WeatherProvider } from './weather-provider';
import { WeatherProviderRegistry } from './weather-provider-registry';
import { openWeatherMapProvider } from './openweathermap-provider';
import { PirateWeatherProvider } from './pirateweather-provider';  // Add this import

// Get the registry instance
const registry = WeatherProviderRegistry.getInstance();

// Register the built-in weather providers
registry.register(openWeatherMapProvider);

// Register Pirate Weather provider
const pirateWeatherProvider = new PirateWeatherProvider();  // Create instance
registry.register(pirateWeatherProvider);                    // Register it

// Export everything for external use
export * from './weather-provider';
export * from './weather-provider-registry';
export * from './openweathermap-provider';
export * from './pirateweather-provider';  // Export Pirate Weather

// Export a function to register custom weather providers
export function registerWeatherProvider(provider: WeatherProvider): void {
  registry.register(provider);
}

// Export a function to get all registered weather providers
export function getAllWeatherProviders(): WeatherProvider[] {
  return registry.getAllProviders();
}

// Export a function to get a weather provider by ID
export function getWeatherProvider(id: string): WeatherProvider | undefined {
  return registry.getProvider(id);
}
