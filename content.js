var info = {
  "first_name": "New",
  "last_name": "Candidate",
  "email_prefix": "hieu.nguyen.minh",
};

var changeEvent = new Event('input', {
  bubbles: true,
  cancelable: true
});

var newCandidateMap = {
  '[data-testid="cem_input_firstname"]': info.first_name,
  '[data-testid="cem_input_lastname"]': info.last_name + " " + makeid(2),
  '[data-testid="cem_input_email"]': info.email_prefix + "+" + makeid(5) + "@paradox.ai",
};

var newUserMap = {
  '[data-testid="user_detail_input_user_fname"]': info.first_name,
  '[data-testid="user_detail_input_user_lname"]': "User" + " " + makeid(2),
  '[data-testid="user_detail_input_job_title"]': "dev",
  '[data-testid="user_detail_input_user_email"]': info.email_prefix + "+" + makeid(5) + "@paradox.ai",
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

function fillData(map) {
  for (const [key, value] of Object.entries(map)) {
    try {
      var input = document.querySelector(key);
      input.value = value;
      input.dispatchEvent(changeEvent);
    } catch (e) {
      continue;
    }
  }
}

fillData(newCandidateMap);
fillData(newUserMap);
