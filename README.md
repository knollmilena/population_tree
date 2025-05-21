# Geo population tree

Приложение визуализирующее иерархическую структурую жителей на основе их принадлежности к географическим группам

Цели и задачи проекта: иерархическое отображение жителей, гибкая конфигурация иерархии, без переписывания логики с возможностью настройки, отображение дополнительной информации о жителе в тултипе (например: "Москва, 10 000 000 жителей").

## Installation

Перейдите в папку backend

```bash
 cd backend
```

Первым делом рекоменду заполнить .env, после этого запустить докер

```bash
 npm run docker
```

Установите зависимости

```bash
npm i
```

Запустите сидирование базы

```bash
 npm run seed:run
```

Запустите сервер

```bash
 npm run start
```

Теперь откройте терминал в папке frontend, установите зависимости, запуститите приложение (на фронтенде перечисленные команды аналогичны)

## Environment Variables

Все переменные окружения указаны в файле .env.example
порт, на котором будет работать лучше не менять, так как именно на него будут идти запросы с фронта

## API Reference

#### Город - Район - Улица

```Получение дерева с конфигурацией по умолчанию (Город - Район - Улица)
  GET http://localhost:3005/hierarchy/build
```

#### Город - Улица

```http
  GET http://localhost:3005/hierarchy/build?root=city&depth=street&depth=resident
```

#### Страна - Город - Улица

```http
  GET http://localhost:3005/hierarchy/build?root=country&depth=city&depth=street&depth=resident
```

#### Страна - Город - Район - Улица - Дом - Жители

```http
  GET http://localhost:3005/hierarchy/build?root=country&depth=city&depth=district&depth=street&depth=house&depth=resident
```

#### Район - Улица - Дом (без жителей)

```http
  GET http://localhost:3005/hierarchy/build?root=district&depth=street&depth=house
```

## Tech Stack

**Client:** React, TypeScript, MUI, Tanstack/React-Query

**Server:** Node, NestJS, TypeScript, TypeORM, PostgreSQL
