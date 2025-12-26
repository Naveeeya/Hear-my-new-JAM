$: sound("saw")
  .note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
  .lpf(90)
  .gain(0.9)

$: sound("bd")
  .bank("RolandTR808")

$: sound("hh")
  .struct("1 0 0 1 0 0 1 0 1 0 0 0")
  .gain(0.2)
  .hpf(2200)
  .lpf(3000)
  .shape(0.15)


$: sound("sine")
  .note("c1")
  .slow(8)
  .gain(0.18)
  .lpf(60)

$: sound("saw")
  .note("<c3>")
  .slow(4)
  .lpf(400)
  .gain(0.22)

$: sound("noise")
  .slow(16)
  .lpf(1200)
  .gain(0.12)


$: sound("sine")
  .note("c6")
  .slow(12)
  .gain(0.08)
  .hpf(7000)

$: sound("sine")
  .note("c3")
  .struct("1 0 1 1 0 1 0 1")
  .gain(0.18)
  .lpf(300)
  .shape(0.25)

$: sound("rim")
  .struct("1*16")
  .gain(0.04)
  .lpf(900)
  .hpf(200)
  .shape(0.25)








