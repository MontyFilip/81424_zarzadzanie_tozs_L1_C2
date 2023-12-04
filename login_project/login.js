// 81424 Filip Lysiak
// Mapowanie odpowiednich obiektów HTML - pobranie danych: furmularz logowania, przycisku oraz komunikatu błędnego logowania
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// Dodanie modułu nasłuchującego zdarzeń dla przycisku logowania (kliknięć)
loginButton.addEventListener("click", (e) => {
  // Zapobiegnięcie domyślnej akcji przycisku [zdefiniowanej w przeglądarce] (przesłania formularza)
  e.preventDefault();
  // Pobranie z formularza wartości wpisanych przez użytkownika
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  // Weryfiakcja czy dane logowania zostały podane
  if (username === "" && password === "") {
    // Gdy obydwa pola są puste, wyświetlamy komunikat o poprawnym logowaniu
    alert("You have successfully logged in.");
    // Odświeżenie / przeładowanie strony
    location.reload();
  } else {
    // Jeśli pola nie są puste, ustawienie widoczności komunikatu błędu na 1
    // Jeśli pola nie są puste, ustawiamy widoczność obiektu (z informacją o błędnym logowaniu) na 1 (pełna widoczność)
    loginErrorMsg.style.opacity = 1;
  }
});
