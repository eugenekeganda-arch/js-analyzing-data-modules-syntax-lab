//: Require datejs 
require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  // Step 3: Loop through args
  for (let i = 0; i < args.length; i++) {
    const userArray = args[i];

    // Step 4: Merge arrays using spread operator
    combinedObject.users.push(...userArray);
  }

  // Step 5: Add merge date
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  // Step 7: Return object
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
