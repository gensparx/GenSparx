---
name: weather
description: "Get current weather and forecasts via wttr.in or Open-Meteo. Use when: user asks about weather, temperature, or forecasts for any location. NOT for: historical weather data, severe weather alerts, or detailed meteorological analysis. No API key needed."
homepage: https://wttr.in/:help
metadata: { "gensparx": { "emoji": "🌤️", "requires": { "bins": ["curl"] } } }
---

# Weather Skill

Get current weather conditions and forecasts for any location. No API key needed.

## Commands

### Current Weather

```bash
# One-line summary
curl "wttr.in/London?format=3"

# Detailed current conditions
curl "wttr.in/London?0"

# Custom format: location, condition, temp, wind, humidity
curl -s "wttr.in/London?format=%l:+%c+%t+(feels+like+%f),+%w+wind,+%h+humidity"
```

### Forecasts

```bash
# 3-day forecast
curl "wttr.in/London"

# Week forecast (detailed view)
curl "wttr.in/London?format=v2"

# Specific day (0=today, 1=tomorrow, 2=day after)
curl "wttr.in/London?1"
```

### Rain Check

```bash
curl -s "wttr.in/London?format=%l:+%c+%p"
```

### Output Formats

| Format | Command |
|--------|---------|
| JSON | `curl "wttr.in/London?format=j1"` |
| PNG image | `curl "wttr.in/London.png"` |
| One-liner | `curl "wttr.in/London?format=%l:+%c+%t+%w"` |

### Format Codes

| Code | Meaning |
|------|---------|
| `%c` | Weather condition emoji |
| `%t` | Temperature |
| `%f` | Feels like |
| `%w` | Wind |
| `%h` | Humidity |
| `%p` | Precipitation |
| `%l` | Location |

## Open-Meteo (Alternative)

For structured JSON data or when wttr.in is unavailable:

```bash
# Current weather for London (lat/lon)
curl "https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=-0.12&current_weather=true"

# 7-day daily forecast with temp + precipitation
curl "https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=-0.12&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto"
```

## Notes

- Replace `London` with any city, region, or airport code (e.g. `wttr.in/ORD`)
- Use `+` for spaces in city names (e.g. `New+York`)
- Rate limited - avoid repeated rapid requests
