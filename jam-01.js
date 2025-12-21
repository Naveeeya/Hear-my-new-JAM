setcpm(90/3)
$: sound("jazz:5")
$: sound("bd hh*2 rim hh*2 bd [- hh] rim hh*2").bank("RolandTR808")

$: sound(
  cat([
    "jazz:0 jazz:1 [jazz:4 jazz:2] jazz:3*2",
    "jazz:0 jazz:1 [jazz:4 jazz:2] jazz:3*3"
  ])
).slow(2)
