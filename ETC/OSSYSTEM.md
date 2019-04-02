# OS

## OS 시스템 관련 정리

> gfg 에서 본 내용들을 정리하기 항목 목차를 분류하지 않는 이유는 전체적인 맥락과 돌아가는 방식을 이해하기 위해 

os 시스템이라는게 결국 cpu, ram, disk 기타 하드웨어를 어떻게 액세스 시키고 동작시키냐에 대한 방법 or 체계를 의미함 거기에 gui니 cgi니 하는 인터페이스를 추가시켜서 동작 시키는게 유저단이고 실질적으로는 커널이라는 부분에서 모든 처리를 맡게됨 

커널은 크게 두 분류

- 마이크로 커널 : 이름 그대로 작은 커널 freeBSD, MiNix, ReDos(러스트)  
- 단일형 커널 : 윈도우, 리눅스 계열(?) 커널 성능및 동작 성능 향상을 위해서 쓰임 관리하기가 힘들고 비대하다

커널의 패턴은 싱글 프로세스에선 단순히 직렬동작으로 이루어 질수 있지만 대부분의 범용(80386) 프로세스부터는 병렬 처리를 지원하게끔 커널 설계가 되어 있다.
여기서 나오는 병렬처리를 위해 Context Switch 라는 명령을 수행하게 되는데 이 문제로 인해 동작 방식을 여러가지 고민하게 됨 (빠른 처리가 좋지 않은가)
커널의 동작 방식은 몇가지가 존재함

- First Come First Serve (FCFS): Simplest scheduling algorithm that schedules according to arrival times of processes.
- Shortest Job First(SJF): Process which have the shortest burst time are scheduled first.
- Longest Job First(LJF): It is similar to SJF scheduling algorithm. 
- Shortest Remaining Time First(SRTF): It is preemptive mode of SJF algorithm in which jobs are schedule according to shortest remaining time.
- Longest Remaining Time First(LRTF): It is preemptive mode of LJF algorithm in which we give priority to the process having largest burst time remaining.
- Round Robin Scheduling: Each process is assigned a fixed time in cyclic way.
- Priority Based scheduling (Non Preemptive): In this scheduling, processes are scheduled according to their priorities, i.e., highest priority process is schedule first. If priorities of two processes match, then schedule according to arrival time.
- Highest Response Ratio Next (HRRN) In this scheduling, processes with highest response ratio is scheduled. This algorithm avoids starvation.

등등 자세한것은 위키검색등을 참조 할것.



## line breaker

- [위키](https://en.wikipedia.org/wiki/Newline)
- 자주쓰는 os들은 대부분 \r\n 내에서 행바꾸기가 되지만 조금더 파고 들면 rs라는 아타리 8비트 규칙도 있고 lf-cr 도 있음
