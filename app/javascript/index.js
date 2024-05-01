$(document).ready(function () {
  // Initialize web3
  ProduceContract.detectNetwork();

  $("#produce-form").submit(function (e) {
    e.preventDefault();
    console.log("no refresh");

    ProduceContract.deployed().then(function (instance) {
      var recipient = $("#recipient").val();
      var farm = $("#farm").val();
      var farmDate = $("#farmDate").val();
      var processingPlant = $("#processingPlant").val();
      var processingDate = $("#processingDate").val();

      var metadata = {
        recipient: recipient,
        farm: farm,
        farmDate: farmDate,
        processingPlant: processingPlant,
        processingDate: processingDate,
      };

      ProduceContract.awardItem(recipient, "URL_TO_IPFS_METADATA_JSON");
    });
  });
});
