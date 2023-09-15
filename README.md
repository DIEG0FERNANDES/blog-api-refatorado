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
2. Execute o comando `npm run clustered` ou `yarn clustered`
3. Execute o comando `docker compose up -d`
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

        --------------------------------------
        Metrics for period to: 22:31:50(-0400) (width: 8.966s)
        --------------------------------------

        errors.ECONNREFUSED: ........................................................... 615
        http.codes.200: ................................................................ 516
        http.downloaded_bytes: ......................................................... 8772
        http.request_rate: ............................................................. 151/sec
        http.requests: ................................................................. 1337
        http.response_time:
          min: ......................................................................... 186
          max: ......................................................................... 4088
         median: ...................................................................... 1939.5
         p95: ......................................................................... 3011.6
         p99: ......................................................................... 4065.2
        http.responses: ................................................................ 516
        vusers.completed: .............................................................. 516
        vusers.created: ................................................................ 1337
        vusers.created_by_name.Find all posts by user Sidney: .......................... 1337
        vusers.failed: ................................................................. 615
        vusers.session_length:
        min: ......................................................................... 194.1
        max: ......................................................................... 4098.1
          median: ...................................................................... 1978.7
          p95: ......................................................................... 3072.4
          p99: ......................................................................... 4065.2


        --------------------------------------
        Metrics for period to: 22:32:00(-0400) (width: 3.461s)
        --------------------------------------

        errors.ECONNREFUSED: ........................................................... 140
        http.codes.200: ................................................................ 229
        http.downloaded_bytes: ......................................................... 3893
        http.request_rate: ............................................................. 100/sec
        http.requests: ................................................................. 163
        http.response_time:
          min: ......................................................................... 2155
          max: ......................................................................... 5721
          median: ...................................................................... 4770.6
          p95: ......................................................................... 5487.5
         p99: ......................................................................... 5711.5
        http.responses: ................................................................ 229
        vusers.completed: .............................................................. 229
        vusers.created: ................................................................ 163
        vusers.created_by_name.Find all posts by user Sidney: .......................... 163
        vusers.failed: ................................................................. 140
        vusers.session_length:
         min: ......................................................................... 2160.9
          max: ......................................................................... 5737.5
         median: ...................................................................... 4867
         p95: ......................................................................... 5487.5
          p99: ......................................................................... 5711.5


        All VUs finished. Total time: 14 seconds

        --------------------------------
        Summary report @ 22:31:55(-0400)
        --------------------------------

        errors.ECONNREFUSED: ........................................................... 755
        http.codes.200: ................................................................ 745
        http.downloaded_bytes: ......................................................... 12665
        http.request_rate: ............................................................. 127/sec
        http.requests: ................................................................. 1500
        http.response_time:
          min: ......................................................................... 186
          max: ......................................................................... 5721
          median: ...................................................................... 2276.1
          p95: ......................................................................... 5168
          p99: ......................................................................... 5598.4
        http.responses: ................................................................ 745
        vusers.completed: .............................................................. 745
        vusers.created: ................................................................ 1500
        vusers.created_by_name.Find all posts by user Sidney: .......................... 1500
        vusers.failed: ................................................................. 755
        vusers.session_length:
          min: ......................................................................... 194.1
         max: ......................................................................... 5737.5
         median: ...................................................................... 2276.1
         p95: ......................................................................... 5168
         p99: ......................................................................... 5598.4