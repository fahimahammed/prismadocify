# Prisma Schema Documentation

## User

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | Int | No | Yes | No |
| email | String | No | Yes | Yes |
| name | String | No | No | No |
| posts | Post | Yes | Yes | No |

## Post

| Field | Type | List | Required | Unique |
|-------|------|------|----------|--------|
| id | Int | No | Yes | No |
| title | String | No | Yes | No |
| content | String | No | No | No |
| published | Boolean | No | Yes | No |
| author | User | No | Yes | No |
| authorId | Int | No | Yes | No |

## Enums

