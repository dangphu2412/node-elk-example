# Nestjs with Elastic Search

## Setup
- We need to make sure our system has prepare these script:
```cmd
sysctl -w vm.max_map_count=262144
```
- Follow instruction here: https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html
- https://stackoverflow.com/questions/42300463/elasticsearch-bootstrap-checks-failing
- After we first running elastic we need to save the password, enrollment token and http_ca.crt
- For example:
```
USER=elastic
PASSWORD=rqB1Dp6T1P-BNyOSFX0f
ENROLLMENT_TOKEN=eyJ2ZXIiOiI4LjEuMiIsImFkciI6WyIxNzIuMTkuMC4yOjkyMDAiXSwiZmdyIjoiODRmNWJjYmU4ZGIwMmIwYWE2NTdhMTcwZjM2NTI2MjBkNGVkNTJkZDcwZDA2MDRmNGE3NTJiYjMxMTk3NGIwNiIsImtleSI6Ikp2WEw4bjhCeDl0WHNUTlFTUGp2Ol81QTNZLS1sUVM2NkZrWExVTVdyOFEifQ==
HTTP CA certificate SHA-256 fingerprint: 84f5bcbe8db02b0aa657a170f3652620d4ed52dd70d0604f4a752bb311974b06
Keystore http 12: N83siU7SRLG4nKwaIe5xvw
Keystore  transport p12: l26HiOVORrag6EfOo-Hscg
```