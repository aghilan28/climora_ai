# Metric

## Definition

A **Metric** is a quantified measurement associated with a Finding. It captures a numeric value, unit, period, geographic scope, and data nature.

## Purpose

Metrics make findings concrete and comparable. They enable charts, thresholds, scenario comparisons, and AI-driven insight extraction.

## Fields

| Field | Type | Cardinality | Required | Description |
|---|---|---|---|---|
| `id` | uuid | 1 | ✅ | Stable identifier. |
| `findingId` | uuid | 1 | ✅ | Finding this metric quantifies. |
| `name` | string | 1 | ✅ | Metric name. |
| `value` | number | 1 | ✅ | Numeric value. |
| `unit` | string | 1 | ✅ | Unit of measurement. |
| `period` | string | 1 | ✅ | Time period. |
| `dataNature` | DataNature | 1 | ✅ | Nature of the metric. |
| `baseline` | string | 0:1 | ❌ | Baseline reference. |
| `geographicScope` | string | 1 | ✅ | Spatial extent. |
| `metadata` | object | 1 | ✅ | Extensible metadata. |

## Relationships

- `QUANTIFIES` → `Finding` (N:1, required)

## Example

```json
{
  "id": "m-654",
  "findingId": "f3b2c1d4-e5f6-7890-abcd-ef1234567890",
  "name": "Global Mean Surface Temperature Anomaly",
  "value": 1.11,
  "unit": "°C",
  "period": "2011-2020",
  "dataNature": "Observed",
  "baseline": "1850-1900",
  "geographicScope": "Global",
  "metadata": {
    "uncertaintyRange": "1.0 to 1.3",
    "statisticalMethod": "Weighted average of multiple datasets",
    "dataSource": "HadCRUT5, Berkeley Earth, GISTEMP",
    "temporalResolution": "annual",
    "spatialResolution": "5° grid"
  }
}
```

## Non-Examples

- A number without a unit or finding is **not** a Metric.
- A qualitative description is **not** a Metric.

## Validation Rules

- `name` must be between 3 and 200 characters.
- `unit` must be non-empty.
- `value` must be a finite number.
- `geographicScope` must be between 2 and 200 characters.
- `period` must be between 4 and 100 characters.

## Version Rules

- Metric updates create new records when values, periods, or baselines change.
- Minor metadata corrections may be versioned as patch increments.

## Governance Rules

- Metrics must be traceable to a source dataset or citation.
- Unit conversions must be logged in the ProvenanceRecord.

## Future Evolution Rules

- Must support time-series linkage in Phase 3.
- Must support uncertainty propagation and ensemble metrics in Phase 4.
