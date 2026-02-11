  /* ===== DOM ===== */
  const form = document.getElementById("kontaktForm");
  const status = document.getElementById("form-status");
  const button = document.getElementById("submitBtn");

  const fornavnInput = document.getElementById("fornavn");
  const telefonInput = document.getElementById("telefon");
  const emailInput = document.getElementById("email");
  const beskedInput = document.getElementById("besked");

  /* ===== ARRAY ===== */
  const inputs = [
    fornavnInput,
    telefonInput,
    emailInput,
    beskedInput
  ];

  /* ===== EVENT ===== */ 
  /*stopper siden for at refresh*/
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    clearErrors();
    status.textContent = "";

    /* ===== OBJEKT ===== */
      /*  value = det der står inde i feltet  */
            /*  trim = fjerner unødvendig brug af space */
    const formData = {
      fornavn: fornavnInput.value.trim(),
      telefon: telefonInput.value.trim(),
      email: emailInput.value.trim(),
      besked: beskedInput.value.trim()
    };

    /*  er der en fejl, hvis ja "has error" */
    let hasError = false;

    /* ===== LOOP ===== */
    /* hvis der ikke detects et svar vil "udfyld.." blive resultatet */
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].hasAttribute("required") && inputs[i].value.trim() === "") {
        setError(inputs[i], "Udfyld alle påkrævede felter");
        hasError = true;
      }
    }

    if (formData.telefon !== "" && !/^[0-9+\s]+$/.test(formData.telefon)) {
      setError(telefonInput, "Telefonnummer er ikke gyldigt");
      hasError = true;
    }

    if (hasError) return;

    /* ===== LOADING STATE ===== */
    /* hvis der ingen fejl er kør den her kode */
    button.disabled = true;
    button.textContent = "Sender...";

    /* ===== SIMULERET SUBMIT ===== */
    /* tilføjrer en timer, for at få det til at føle reelt*/
    setTimeout(function () {
      status.textContent = "Tak for din besked! Vi kontakter dig hurtigst muligt.";
      status.style.color = "green";

      form.reset();
      button.disabled = false;
      button.textContent = "Send";
    }, 1200);
  });

  /* ===== FUNKTIONER ===== */
  function setError(input, message) {
    input.classList.add("error");
    status.textContent = message;
    status.style.color = "red";
  }

  function clearErrors() {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("error");
    }
  }
