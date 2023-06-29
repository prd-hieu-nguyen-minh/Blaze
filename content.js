var info = {
  "first_name": "Choose",
  "last_name": "Time",
  "email_prefix": "hieu.nguyen.minh",
};

var changeEvent = new Event('input', { bubbles: true, cancelable: true });

var map = {
  '[data-testid="cem_input_firstname"]': info.first_name,
  '[data-testid="cem_input_lastname"]': info.last_name + " " + makeid(2),
  '[data-testid="cem_input_email"]': info.email_prefix + "+" + makeid(5) + "@paradox.ai",
};

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

for (const [key, value] of Object.entries(map)) {
  var input = document.querySelector(key);
  input.value = value;
  input.dispatchEvent(changeEvent);
}
