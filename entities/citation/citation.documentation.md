# Citation

## Definition

A **Citation** is a bibliographic or data reference that identifies a research source, report, dataset, or government document. It is the provenance anchor for every Finding and Evidence record.

## Purpose

Citations provide traceability from claims in the knowledge system back to the original scientific literature or data source. They enable verification, reproducibility, and attribution.

## Fields

| Field | Type | Cardinality | Required | Description |
|---|---|---|---|---|
| `id` | uuid | 1 | ✅ | Stable identifier. |
| `title` | string | 1 | ✅ | Title of the source. |
| `authors` | string[] | 1:N | ✅ | Author names. |
| `year` | integer | 1 | ✅ | Publication year. |
| `journal` | string | 0:1 | ❌ | Journal or serial title. |
| `publisher` | string | 0:1 | ❌ | Publisher or institution. |
| `doi` | string | 0:1 | ❌ | Digital Object Identifier. |
| `isbn` | string | 0:1 | ❌ | ISBN for books. |
| `url` | string | 0:1 | ❌ | URL to source. |
| `citationType` | CitationType | 1 | ✅ | Kind of source. |
| `metadata` | object | 1 | ✅ | Extensible metadata. |

## Relationships

- `CITED_BY` ← `Finding` (N:M, optional)
- `CITED_BY` ← `Evidence` (N:M, optional)

## Example

```json
{
  "id": "c-321",
  "title": "Climate Change 2021: The Physical Science Basis. Contribution of Working Group I to the Sixth Assessment Report",
  "authors": ["IPCC"],
  "year": 2021,
  "publisher": "Cambridge University Press",
  "doi": "10.1017/9781009157896",
  "url": "https://www.ipcc.ch/report/ar6/wg1/",
  "citationType": "Report",
  "metadata": {
    "publisher": "Cambridge University Press",
    "keywords": ["IPCC", "AR6", "physical science basis"]
  }
}
```

## Non-Examples

- A URL with no title or author is **not** a Citation.
- A personal communication is **not** a Citation unless formally archived.

## Validation Rules

- `title` must be between 5 and 500 characters.
- `authors` must contain at least one name with at least 2 characters.
- `year` must be between 1800 and 2100.
- If `doi` is present, it must be unique within the citation table.
- `url` must be a valid URI if provided.

## Version Rules

- Citations are generally immutable. Corrections create a new version with a `replaces` pointer.
- DOI updates are treated as a new Citation record.

## Governance Rules

- Citation records are maintained by a Bibliographic Steward.
- DOI links must be verified against Crossref or DataCite where available.

## Future Evolution Rules

- Must support ORCID and ROR identifiers in Phase 3.
- Must support automatic citation style generation (APA, MLA, Chicago) in Phase 4.
