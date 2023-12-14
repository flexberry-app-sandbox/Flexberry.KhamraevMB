docker build --no-cache -f SQL\Dockerfile.PostgreSql -t khamraevmb-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t khamraevmb-java/app ../../..
