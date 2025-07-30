
🌐 **Live Site:** [https://hansschenker.github.io/rxjs-operator-tutorial/](https://hansschenker.github.io/rxjs-operator-tutorial/)

# RxJS Operator Tutorial


## 📚 RxJS Operator Index (Sessions 1–24)

| Session | Operators | When to use |
|---------|-----------|--------------|
| [**1–4**](#session-1) Creation Operators | [`of`](#of), [`from`](#from), [`interval`](#interval), [`timer`](#timer), etc. | Create Observables from scratch or other data sources. |
| [**5–6**](#session-5) Join Creation Operators | [`combineLatest`](#combinelatest), [`merge`](#merge), [`concat`](#concat), [`forkJoin`](#forkjoin), [`zip`](#zip), etc. | Combine multiple Observables together when starting streams. |
| [**7–9**](#session-7) Transformation Operators (Part 1) | [`buffer`](#buffer), [`bufferTime`](#buffertime), [`window`](#window), [`scan`](#scan), etc. | Collect values over time or apply stateful transforms. |
| [**10–13**](#session-10) Filtering Operators | [`filter`](#filter), [`take`](#take), [`first`](#first), [`skip`](#skip), [`distinct`](#distinct), etc. | Select or skip emissions based on conditions. |
| [**14–15**](#session-14) Join (Flattening) Operators | [`mergeAll`](#mergeall), [`switchAll`](#switchall), [`exhaustAll`](#exhaustall), [`startWith`](#startwith), [`withLatestFrom`](#withlatestfrom), etc. | Flatten inner Observables and combine live values. |
| [**16**](#session-16) Multicasting Operators | [`multicast`](#multicast), [`share`](#share), [`publish*`](#publish) | Share a single source with multiple subscribers. |
| [**17**](#session-17) Error Handling Operators | [`catchError`](#catcherror), [`retry`](#retry), [`retryWhen`](#retrywhen) | Recover or retry when errors happen. |
| [**18–21**](#session-18) Utility Operators | [`tap`](#tap), [`observeOn`](#observeon), [`timeout`](#timeout), [`materialize`](#materialize), etc. | Side‑effects, scheduling, timeouts, converting to/from Notifications. |
| [**22**](#session-22) Conditional & Boolean | [`defaultIfEmpty`](#defaultifempty), [`every`](#every), [`find`](#find), [`isEmpty`](#isempty) | Assert conditions or handle empty streams. |
| [**23**](#session-23) Mathematical & Aggregate | [`count`](#count), [`reduce`](#reduce), [`max`](#max), [`min`](#min) | Final summaries, min/max stats, counting values. |
| [**24**](#session-24) Higher‑Order Mapping (Advanced) | [`switchScan`](#switchscan), [`mergeMap`](#mergemap-concurrency) | Accumulation with cancellation or controlling inner concurrency. |


**Learn RxJS operators with ChatGPT.**  
This project is a browser-first, framework-free learning sandbox built with **Vite + TypeScript + RxJS**.

## How to run

```bash
npm install
npm run dev
```
Open the URL printed by Vite (usually http://localhost:5173) to explore interactive demos.

---

## Sessions & Operators

<a id="session-1"></a>
### Session 1 — Events & Patterns
- [`fromEvent`](src/session1/fromEventDemo.ts) — [Diagram](src/session1/diagrams.md#fromevent)
- [`fromEventPattern`](src/session1/fromEventPatternDemo.ts) — [Diagram](src/session1/diagrams.md#fromeventpattern)
- [`bindCallback`](src/session1/bindCallbackDemo.ts) — [Diagram](src/session1/diagrams.md#bindcallback)
- [`bindNodeCallback`](https://rxjs.dev/api/index/function/bindNodeCallback) *(Node-only)*

<a id="session-2"></a>
### Session 2 — Time & Scheduling
- [`interval`](src/session2/intervalDemo.ts) — [Diagram](src/session2/diagrams.md#interval)
- [`timer`](src/session2/timerDemo.ts) — [Diagram](src/session2/diagrams.md#timer)
- [`generate`](src/session2/generateDemo.ts) — [Diagram](src/session2/diagrams.md#generate)
- [`range`](src/session2/rangeDemo.ts) — [Diagram](src/session2/diagrams.md#range)

<a id="session-3"></a>
### Session 3 — Data Sources & Literals
- [`from`](src/session3/fromDemo.ts) — [Diagram](src/session3/diagrams.md#from)
- [`of`](src/session3/ofDemo.ts) — [Diagram](src/session3/diagrams.md#of)
- [`defer`](src/session3/deferDemo.ts) — [Diagram](src/session3/diagrams.md#defer)
- [`iif`](src/session3/iifDemo.ts) — [Diagram](src/session3/diagrams.md#iif)

<a id="session-4"></a>
### Session 4 — HTTP & Control Flows
- [`ajax`](src/session4/ajaxDemo.ts) — [Diagram](src/session4/diagrams.md#ajax)
- [`throwError`](src/session4/throwErrorDemo.ts) — [Diagram](src/session4/diagrams.md#throwerror)
- [`EMPTY`](src/session4/emptyDemo.ts) — [Diagram](src/session4/diagrams.md#empty)

<a id="session-5"></a>
### Session 5 — Join Creation (Combination & State)
- [`combineLatest`](src/session5/combineLatestDemo.ts) — [Diagram](src/session5/diagrams.md#combinelatest)
- [`merge`](src/session5/mergeDemo.ts) — [Diagram](src/session5/diagrams.md#merge)
- [`concat`](src/session5/concatDemo.ts) — [Diagram](src/session5/diagrams.md#concat)

<a id="session-6"></a>
### Session 6 — Join Creation (Coordination & Pairing)
- [`forkJoin`](src/session6/forkJoinDemo.ts) — [Diagram](src/session6/diagrams.md#forkjoin)
- [`zip`](src/session6/zipDemo.ts) — [Diagram](src/session6/diagrams.md#zip)
- [`race`](src/session6/raceDemo.ts) — [Diagram](src/session6/diagrams.md#race)
- [`partition`](src/session6/partitionDemo.ts) — [Diagram](src/session6/diagrams.md#partition)

<a id="session-7"></a>
### Session 7 — Buffering & Windowing
- Buffer basics: [`buffer`](src/session7/bufferBasicsDemo.ts), [`bufferCount`](src/session7/bufferBasicsDemo.ts), [`bufferTime`](src/session7/bufferBasicsDemo.ts) — [Diagrams](src/session7/diagrams.md#buffer-basics)
- Buffer advanced: [`bufferToggle`](src/session7/bufferAdvancedDemo.ts), [`bufferWhen`](src/session7/bufferAdvancedDemo.ts) — [Diagrams](src/session7/diagrams.md#buffer-advanced)
- Window basics: [`window`](src/session7/windowBasicsDemo.ts), [`windowCount`](src/session7/windowBasicsDemo.ts), [`windowTime`](src/session7/windowBasicsDemo.ts) — [Diagrams](src/session7/diagrams.md#window-basics)
- Window advanced: [`windowToggle`](src/session7/windowAdvancedDemo.ts), [`windowWhen`](src/session7/windowAdvancedDemo.ts) — [Diagrams](src/session7/diagrams.md#window-advanced)
- Window consumption patterns — [Demo](src/session7/windowConsumptionDemo.ts), [Diagrams](src/session7/diagrams.md#window-consumption)

<a id="session-8"></a>
### Session 8 — Mapping & Switching
- [`map`](src/session8/mapDemo.ts), [`mapTo`](src/session8/mapDemo.ts) — [Diagram](src/session8/diagrams.md#map--mapto)
- [`mergeMap`](src/session8/mergeMapDemo.ts) — [Diagram](src/session8/diagrams.md#mergemap)
- [`switchMap`](src/session8/switchMapDemo.ts) — [Diagram](src/session8/diagrams.md#switchmap)
- [`concatMap`](src/session8/concatMapDemo.ts) — [Diagram](src/session8/diagrams.md#concatmap)
- [`exhaustMap`](src/session8/exhaustMapDemo.ts) — [Diagram](src/session8/diagrams.md#exhaustmap)

<a id="session-9"></a>
### Session 9 — Stateful & Advanced
- [`scan`](src/session9/scanMergeScanDemo.ts), [`mergeScan`](src/session9/scanMergeScanDemo.ts) — [Diagram](src/session9/diagrams.md#scan--mergescan)
- [`pairwise`](src/session9/pairwisePluckDemo.ts), [`pluck`](src/session9/pairwisePluckDemo.ts) — [Diagram](src/session9/diagrams.md#pairwise--pluck)
- [`groupBy`](src/session9/groupByDemo.ts) — [Diagram](src/session9/diagrams.md#groupby)
- [`expand`](src/session9/expandDemo.ts) — [Diagram](src/session9/diagrams.md#expand)

<a id="session-10"></a>
### Session 10 — Basic Filtering
- [`filter`](src/session10/filterDemo.ts) — [Diagram](src/session10/diagrams.md#filter)
- [`first`](src/session10/firstLastDemo.ts), [`last`](src/session10/firstLastDemo.ts) — [Diagram](src/session10/diagrams.md#first--last)
- [`single`](src/session10/singleDemo.ts) — [Diagram](src/session10/diagrams.md#single)
- [`elementAt`](src/session10/elementAtDemo.ts) — [Diagram](src/session10/diagrams.md#elementat)

<a id="session-11"></a>
### Session 11 — Distinct Values
- [`distinct`](src/session11/distinctDemo.ts) — [Diagram](src/session11/diagrams.md#distinct)
- [`distinctUntilChanged`](src/session11/distinctUntilChangedDemo.ts) — [Diagram](src/session11/diagrams.md#distinctuntilchanged)
- [`distinctUntilKeyChanged`](src/session11/distinctUntilKeyChangedDemo.ts) — [Diagram](src/session11/diagrams.md#distinctuntilkeychanged)

<a id="session-12"></a>
### Session 12 — Time-based Filtering
- [`debounceTime`](src/session12/debounceDemo.ts) — [Diagram](src/session12/diagrams.md#debouncetime)
- [`throttleTime`](src/session12/throttleDemo.ts) — [Diagram](src/session12/diagrams.md#throttletime)
- [`auditTime`](src/session12/auditDemo.ts) — [Diagram](src/session12/diagrams.md#audittime)


<a id="session-13"></a>
### Session 13 — Skip & Take
- [`skip`](src/session13/skipTakeDemo.ts), [`take`](src/session13/skipTakeDemo.ts), [`skipLast`](src/session13/skipTakeDemo.ts), [`takeLast`](src/session13/skipTakeDemo.ts) — [Diagram](src/session13/diagrams.md#skip--take-basics)
- [`skipUntil`](src/session13/skipUntilTakeUntilDemo.ts), [`skipWhile`](src/session13/skipUntilTakeUntilDemo.ts), [`takeUntil`](src/session13/skipUntilTakeUntilDemo.ts), [`takeWhile`](src/session13/skipUntilTakeUntilDemo.ts) — [Diagram](src/session13/diagrams.md#skipuntil--skipwhile--takeuntil--takewhile)
- [`ignoreElements`](src/session13/ignoreElementsDemo.ts) — [Diagram](src/session13/diagrams.md#ignoreelements)
- [`sample`](src/session13/sampleDemo.ts), [`sampleTime`](src/session13/sampleDemo.ts) — [Diagram](src/session13/diagrams.md#sample--sampletime)


<a id="session-14"></a>
### Session 14 — Flattening Higher-order Observables
- [`mergeAll`](src/session14/mergeAllConcatAllDemo.ts), [`concatAll`](src/session14/mergeAllConcatAllDemo.ts) — [Diagram](src/session14/diagrams.md#mergeall--concatall)
- [`switchAll`](src/session14/switchAllExhaustAllDemo.ts), [`exhaustAll`](src/session14/switchAllExhaustAllDemo.ts) — [Diagram](src/session14/diagrams.md#switchall--exhaustall)
- [`combineLatestAll`](src/session14/combineLatestAllDemo.ts) — [Diagram](src/session14/diagrams.md#combinelatestall)


<a id="session-15"></a>
### Session 15 — Combination Helpers
- [`startWith`](src/session15/startWithDemo.ts) — [Diagram](src/session15/diagrams.md#startwith)
- [`withLatestFrom`](src/session15/withLatestFromDemo.ts) — [Diagram](src/session15/diagrams.md#withlatestfrom)


<a id="session-16"></a>
### Session 16 — Multicasting Operators
- [`multicast`](src/session16/multicastDemo.ts) — [Diagram](src/session16/diagrams.md#multicast)
- [`publish`](src/session16/publishDemo.ts) — [Diagram](src/session16/diagrams.md#publish)
- [`publishBehavior`](src/session16/publishBehaviorDemo.ts) — [Diagram](src/session16/diagrams.md#publishbehavior)
- [`publishLast`](src/session16/publishLastDemo.ts) — [Diagram](src/session16/diagrams.md#publishlast)
- [`publishReplay`](src/session16/publishReplayDemo.ts) — [Diagram](src/session16/diagrams.md#publishreplay)
- [`share`](src/session16/shareDemo.ts) — [Diagram](src/session16/diagrams.md#share)


<a id="session-17"></a>
### Session 17 — Error Handling Operators
- [`catchError`](src/session17/catchErrorDemo.ts) — [Diagram](src/session17/diagrams.md#catcherror)
- [`retry`](src/session17/retryDemo.ts) — [Diagram](src/session17/diagrams.md#retry)
- [`retryWhen`](src/session17/retryWhenDemo.ts) — [Diagram](src/session17/diagrams.md#retrywhen)


<a id="session-18"></a>
### Session 18 — Utility: Side-effects & Scheduling
- [`tap`](src/session18/tapDemo.ts) — [Diagram](src/session18/diagrams.md#tap)
- [`observeOn`](src/session18/observeOnDemo.ts) — [Diagram](src/session18/diagrams.md#observeon)
- [`subscribeOn`](src/session18/subscribeOnDemo.ts) — [Diagram](src/session18/diagrams.md#subscribeon)


<a id="session-19"></a>
### Session 19 — Timing Helpers
- [`delay`](src/session19/delayDemo.ts) — [Diagram](src/session19/diagrams.md#delay)
- [`delayWhen`](src/session19/delayWhenDemo.ts) — [Diagram](src/session19/diagrams.md#delaywhen)
- [`timeInterval`](src/session19/timeIntervalDemo.ts) — [Diagram](src/session19/diagrams.md#timeinterval)
- [`timestamp`](src/session19/timestampDemo.ts) — [Diagram](src/session19/diagrams.md#timestamp)

<a id="session-20"></a>
### Session 20 — Timeouts & Fallbacks
- [`timeout`](src/session20/timeoutDemo.ts) — [Diagram](src/session20/diagrams.md#timeout)
- [`timeoutWith`](src/session20/timeoutWithDemo.ts) — [Diagram](src/session20/diagrams.md#timeoutwith)

<a id="session-21"></a>
### Session 21 — Notifications & Aggregation
- [`materialize`](src/session21/materializeDemo.ts) — [Diagram](src/session21/diagrams.md#materialize)
- [`dematerialize`](src/session21/dematerializeDemo.ts) — [Diagram](src/session21/diagrams.md#dematerialize)
- [`toArray`](src/session21/toArrayDemo.ts) — [Diagram](src/session21/diagrams.md#toarray)


<a id="session-22"></a>
### Session 22 — Conditional & Boolean Operators
- [`defaultIfEmpty`](src/session22/defaultIfEmptyDemo.ts) — [Diagram](src/session22/diagrams.md#defaultifempty)
- [`every`](src/session22/everyDemo.ts) — [Diagram](src/session22/diagrams.md#every)
- [`find`](src/session22/findDemo.ts) — [Diagram](src/session22/diagrams.md#find)
- [`findIndex`](src/session22/findIndexDemo.ts) — [Diagram](src/session22/diagrams.md#findindex)
- [`isEmpty`](src/session22/isEmptyDemo.ts) — [Diagram](src/session22/diagrams.md#isempty)


<a id="session-23"></a>
### Session 23 — Mathematical & Aggregate Operators
- [`count`](src/session23/countDemo.ts) — [Diagram](src/session23/diagrams.md#count)
- [`max`](src/session23/maxMinDemo.ts), [`min`](src/session23/maxMinDemo.ts) — [Diagram](src/session23/diagrams.md#max--min)
- [`reduce`](src/session23/reduceDemo.ts) — [Diagram](src/session23/diagrams.md#reduce)



<a id="session-24"></a>
### Session 24 — Higher-Order Mapping (Advanced)
- [`switchScan`](src/session24/switchScanDemo.ts) — [Diagram](src/session24/diagrams.md#switchscan)
- [`mergeMap` (concurrency)](src/session24/mergeMapConcurrencyDemo.ts) — [Diagram](src/session24/diagrams.md#mergemap-concurrency)

---

## Project Structure

```
src/
  session1/   # Events & Patterns
  session2/   # Time & Scheduling
  session3/   # Data Sources & Literals
  session4/   # HTTP & Control Flows
  session5/   # Join Creation (Combination & State)
  session6/   # Join Creation (Coordination & Pairing)
  session7/   # Buffering & Windowing
  session8/   # Mapping & Switching
  session9/   # Stateful & Advanced
  session10/  # Basic Filtering
  session11/  # Distinct Values
  main.ts     # mounts all demos
index.html    # sections for all operator demos
```

Each operator demo:
1. Mounts its own DOM elements and RxJS subscriptions.
2. Includes a **Mermaid diagram** in a comment and in the `diagrams.md` file.
3. Logs its output to a dedicated `<div>`.

---

## Next steps

- Continue with **Session 12: Time-based Filtering** and other filtering operators.
- Add marble diagrams for time-based operators.
- Convert into a published interactive site.

---

✨ Built as a guided learning project with **ChatGPT** ✨

## Deployment (GitHub Pages)

This repo is configured to deploy to **GitHub Pages** via Actions.

1. Push your repo to GitHub with default branch **`main`**.
2. In **Settings → Pages**, set:
   - **Source**: GitHub Actions
3. Ensure `vite.config.ts` has `base: '/<REPO_NAME>/'` (here it is `/rxjs-operator-tutorial/`). If you fork, change it.
4. Commit & push. The site will be built and deployed automatically at:
   - `https://<your-username>.github.io/<REPO_NAME>/`

## Resources

- **RxJS Operator Handbook (Full Edition Linked PDF):** https://hansschenker.github.io/rxjs-operator-tutorial/handbook/RxJS_Operator_Handbook_Full_Linked.pdf


- **RxJS Operator Handbook (Full Edition PDF):** https://hansschenker.github.io/rxjs-operator-tutorial/handbook/RxJS_Operator_Handbook_Full.pdf


- **Pitfalls & Best Practices:** [https://hansschenker.github.io/rxjs-operator-tutorial/docs/pitfalls.md](https://hansschenker.github.io/rxjs-operator-tutorial/docs/pitfalls.md)
- **RxJS Operator Handbook (PDF):** https://hansschenker.github.io/rxjs-operator-tutorial/handbook/RxJS_Operator_Handbook.pdf
- **Handbook (Markdown):** handbook/handbook.md
