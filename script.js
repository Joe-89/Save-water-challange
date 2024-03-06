const tipy = [
  {
    popis:
      "Opravte kapající kohoutky. Každá kapka z kohoutku za minutu utratí 2 litry vody. Za den to může být až 2880 litrů! To je ekvivalent naplnění 1440 PET lahví (0,5 l)",
  },
  { popis: "Sprchujte se místo koupání. Sprchování spotřebuje 3-5krát méně vody než koupání. Zkuste se sprchovat do 5 minut." },
  { popis: "Zkrácení sprchování o 2 minuty ušetří až 12 litrů vody." },
  { popis: "Nainstalujte sprchovou hlavici s nižším průtokem. Moderní sprchové hlavice s perlátorem snižují spotřebu vody až o 50%." },
  { popis: "Opravte kapající kohoutky. Kapkající kohoutek může za den ztratit až 24 litrů vody." },
  {
    popis:
      "Nainstalujte termostatickou baterii. Termostatická baterie udržuje stálou teplotu vody a snižuje tak zbytečné plýtvání vodou při nastavování teploty.",
  },
  { popis: "Používejte umyvadlo na sprchování. Umyvadlo na sprchování vám umožní si umýt vlasy a obličej s menší spotřebou vody." },
  { popis: "Napusťte si vanu jen do poloviny. Ušetříte tak 75 litrů vody." },
  { popis: "Sbírejte dešťovou vodu. Dešťovou vodu můžete použít na zalévání zahrady nebo mytí auta." },
  { popis: "Myjte nádobí v myčce. Myčka spotřebuje méně vody než ruční mytí, pokud je správně naplněná." },
  { popis: "Naplňte myčku až po okraj. Mytí s poloprázdnou myčkou je plýtvání vodou." },
  { popis: "Nenechávejte vodu téct při oplachování nádobí. Oplachujte nádobí v napuštěném dřezu nebo pod sprchou." },
  { popis: "Používejte ekologické čisticí prostředky. Ekologické čisticí prostředky se snáze rozkládají a méně zatěžují životní prostředí." },
  { popis: "Rozmrazujte potraviny v lednici. Nemrhajte vodou na rozmrazování potravin pod tekoucí vodou." },
  { popis: "Zkontrolujte, zda neteče voda z vodovodních baterií. I malý únik může za den ztratit mnoho litrů vody." },
  { popis: "Používejte varnou konvici. Varná konvice spotřebuje méně vody než ohřívání vody v hrnci na sporáku." },
  { popis: "Naplňte hrnek vodou jen do té míry, kolik potřebujete. Neplýtvejte vodou na ohřívání zbytečně velkého množství vody." },
  { popis: "Sbírejte vodu ze zeleniny a ovoce. Vodu ze zeleniny a ovoce můžete použít na zalévání pokojových rostlin." },
  { popis: "Zalévejte ráno nebo večer. V horkých hodinách se voda rychleji vypařuje." },
  { popis: "Zalévejte přímo ke kořenům rostlin. Neplýtvejte vodou na zalévání listů a chodníků." },
  { popis: "Používejte mulč. Mulč pomáhá udržovat vlhkost v půdě a snižuje potřebu zalévání." },
  { popis: "Zavlažujte trávník jen v případě potřeby. Trávník vydrží i sucho, pokud není příliš horké počasí." },
  { popis: "Sbírejte dešťovou vodu. Dešťovou vodu můžete použít na zalévání zahrady." },
  { popis: "Využijte šedou vodu. Šedou vodu z pračky a myčky nádobí můžete použít na zalévání zahrady." },
  { popis: "Zvolte rostliny odolné vůči suchu. Existuje mnoho druhů rostlin, které se obejdou s minimem vody." },
  { popis: "Opravte kapající kohoutky na zahradě. Kapkající kohoutek na zahradě může za den ztratit mnoho litrů vody." },
  { popis: "Zkontrolujte vodoměr. Sledujte spotřebu vody a hledejte možnosti, jak ji snížit." },
  { popis: "Mluvte o šetření vodou s rodinou a přáteli. Společně můžeme dosáhnout velkých změn." },
];

let aktualniTip = 0;

function zobrazTip() {
  const cisloTipuElement = document.getElementById("cislo-tipu");
  const textTipuElement = document.getElementById("text-tipu");

  cisloTipuElement.textContent = aktualniTip + 1;
  textTipuElement.textContent = tipy[aktualniTip].popis;
}

document.getElementById("dalsi-tip").addEventListener("click", function () {
  aktualniTip++;
  if (aktualniTip === tipy.length) {
    aktualniTip = 0;
  }
  zobrazTip();
});

zobrazTip();
