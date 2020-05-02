# IceHoney Blog

## Development Environment

### Setup Requirements

- Install [Docker](https://www.docker.com/community-edition#/download)

### Boot up

```
$ docker-compose up --build
```

To run it in background (detached mode), just add `-d` option

```
$ docker-compose up --build -d
```

### Debug mode

Remove running `blog` container if it exists:

```
$ docker-compose ps
$ docker-compose rm -sfv blog
```

Create a `blog` container and enter bash:

```
$ docker-compose run --no-deps --rm --service-ports blog bash
root@0bf757d0388e:/blog/current# yarn dev
```

Wait a few seconds and then visit `http://localhost:8080/`.

### Tear down

```
$ docker-compose down -v
```

## Deployment

### Build

We can run below command to generate build files.

```
$ docker build -t blog --no-cache .
$ docker run --rm -v `pwd`/dist:/blog/current/dist blog yarn build
```

The build files locate at `dist` directory.
