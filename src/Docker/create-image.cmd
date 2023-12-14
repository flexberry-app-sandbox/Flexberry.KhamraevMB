docker build --no-cache -f SQL\Dockerfile.PostgreSql -t khamraevmb/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t khamraevmb/app ../..
