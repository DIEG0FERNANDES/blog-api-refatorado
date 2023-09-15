# blog-api-refatorado

API para estudo de testes de API.

## Passos para executar a API:

1. Execute o comando `npm i` ou `yarn`
2. Execute o comando `yarn start` ou `npm start`

Após executar a API, é possível acessar a documentação por meio da url:

```
http://localhost:3000/docs
```

## Passos para executar os testes:

1. Execute o comando `npm run populate` ou `yarn populate`
2. Execute o comando `docker compose up -d`
3. Execute o comando `npm run clustered` ou `yarn clustered`
4. Execute o comando em um terminal separado `npm i -g artillery` ou `yarn add --global artillery`
5. Execute o comando no terminal separado `artillery run ./load_tests/find_posts.yaml`


## Descrições do laptop

Processador:
-	Number of cores		4 (max 4)
-	Number of threads	4 (max 4)
-	Manufacturer		GenuineIntel
-	Name			Intel Pentium N5000
-	Codename		Gemini Lake
-	Specification		Intel(R) Pentium(R) Silver N5000 CPU @ 1.10GHz
-	Package (platform ID)	Socket 1090 FCBGA (0x0)
-	CPUID			6.A.1
-	Extended CPUID		6.7A
-	Core Stepping		B0
-	Technology		14 nm
-	TDP Limit		6.0 Watts
-	Tjmax			105.0 °C
-	Core Speed		2585.0 MHz
-	Multiplier x Bus Speed	26.0 x 99.4 MHz
-	Base frequency (cores)	99.4 MHz
-	Base frequency (mem.)	99.4 MHz
-	Stock frequency		1100 MHz
-	Max frequency		0 MHz
-	Instructions sets	MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, EM64T, AES,

GPU:
-    Name           Intel UHD Graphics 605
-    Manufacturer   Dell
-    Codename		Gemini Lake

Memoria RAM:
-    4 gb ram
-    Memory type		DDR4
-    Max bandwidth		DDR4-2400 (1200 MHz)
-    Size			4096 MBytes

## Resultado
-    duration: 10
-    arrivalRate: 150

````console comando
--------------------------------------
Metrics for period to: 23:22:30(-0400) (width: 4.792s)
--------------------------------------

errors.ECONNREFUSED: ........................................................... 488
http.request_rate: ............................................................. 116/sec
http.requests: ................................................................. 494
vusers.created: ................................................................ 495
vusers.created_by_name.Find all posts by user Sidney: .......................... 495
vusers.failed: ................................................................. 488


Phase completed: unnamed (index: 0, duration: 10s) 23:22:36(-0400)

Warning: multiple batches of metrics for period 1694748140000 2023-09-15T03:22:20.000Z
--------------------------------------
Metrics for period to: 23:22:40(-0400) (width: 9.588s)
--------------------------------------

errors.ECONNREFUSED: ........................................................... 793
http.codes.200: ................................................................ 219
http.downloaded_bytes: ......................................................... 3723
http.request_rate: ............................................................. 143/sec
http.requests: ................................................................. 1006
http.response_time:
  min: ......................................................................... 1135
  max: ......................................................................... 2714
  median: ...................................................................... 1978.7
  p95: ......................................................................... 2465.6
  p99: ......................................................................... 2618.1
http.responses: ................................................................ 219
vusers.completed: .............................................................. 219
vusers.created: ................................................................ 1005
vusers.created_by_name.Find all posts by user Sidney: .......................... 1005
vusers.failed: ................................................................. 793
vusers.session_length:
  min: ......................................................................... 1169.6
  max: ......................................................................... 2737.1
  median: ...................................................................... 2018.7
  p95: ......................................................................... 2515.5
  p99: ......................................................................... 2671


All VUs finished. Total time: 16 seconds

--------------------------------
Summary report @ 23:22:41(-0400)
--------------------------------

errors.ECONNREFUSED: ........................................................... 1281
http.codes.200: ................................................................ 219
http.downloaded_bytes: ......................................................... 3723
http.request_rate: ............................................................. 131/sec
http.requests: ................................................................. 1500
http.response_time:
  min: ......................................................................... 1135
  max: ......................................................................... 2714
  median: ...................................................................... 1978.7
  p95: ......................................................................... 2465.6
  p99: ......................................................................... 2618.1
http.responses: ................................................................ 219
vusers.completed: .............................................................. 219
vusers.created: ................................................................ 1500
vusers.created_by_name.Find all posts by user Sidney: .......................... 1500
vusers.failed: ................................................................. 1281
vusers.session_length:
  min: ......................................................................... 1169.6
  max: ......................................................................... 2737.1
  median: ...................................................................... 2018.7
  p95: ......................................................................... 2515.5
  p99: ......................................................................... 2671

````