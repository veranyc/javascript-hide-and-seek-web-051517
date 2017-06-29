function getFirstSelector(selector) {
  return document.querySelector(selector)
}


// nestedTarget() that pulls a .target out of #nested
// select ID with #, CSS selectors with "."

function nestedTarget() {
  return document.querySelector('#nested .target')
}

// increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n.
// (You might need to make use of parseInt()
function increaseRankBy(n) {
  // give me all the items associated with the css class of ranked-list
    const list = document.querySelectorAll('.ranked-list')

// iterate on that list and define the children of the list
    for (let i = 0, l = list.length; i < l; i++) {
      let kids = list[i].children

// iterate on the kids and parse each element's HTML so that it's an integer. Then add n to it.
      for (let j = 0, k = kids.length; j < k; j++) {
        kids[j].innerHTML = parseInt(kids[j].innerHTML) + n
      }
    }
  }


// that pulls out the most deeply nested child from div#grand-node. (boo)
// (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them.
// This is challenging to implement correctly, but not beyond your ability!)

function deepestChild() {
  let grandNode = document.querySelector('#grand-node > div > div > div > div')
  return grandNode

}
