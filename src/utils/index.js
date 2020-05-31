// const regexes = [
//   /\b(Rust)\b/i,
//   /\b(Java)\b/i,
//   /\b(Scala)\b/i,
//   /\b(Kotlin)\b/i,
//   /\b(Swift)\b/i,
//   /\b(Ruby)\b/i,
//   /\b(Python)\b/i,
//   /\b(PHP|PHP5|PHP7)\b/i,
//   /\b(JS|JavaScript)\b/i,
//   /\b(React|ReactJS)\b/i,
//   /\b(Angular|Angular5|Angular6|Angular7)\b/i,
//   /\b(Vue|VueJS)\b/i,
//   /\b(Node|NodeJS)\b/i,
//   /\b(Go|GO|Golang|golang|GOLANG)\b/,
//   /C#/i,
//   /\bC\b|C\+\+/i,
//   /\bHaskell\b/i,
//   /\bErlang\b/
// ]

export const techs = {
  rust: {
    label: 'Rust',
    regex: /\b(Rust)\b/i
  },
  react: {
    label: 'React',
    regex: /\b(React|ReactJS)\b/i
  },
  java: {
    label: 'Java',
    regex: /\b(Java)\b/i
  },
  vue: {
    label: 'Vue',
    regex: /\b(Vue|VueJS)\b/i
  },
  angular: {
    label: 'Angular',
    regex: /\b(Angular|Angular5|Angular6|Angular7|AngularJS)\b/i
  },
  python: {
    label: 'Python',
    regex: /\b(Python)\b/i
  },
  javascript: {
    label: 'JavaScript',
    regex: /\b(JS|JavaScript)\b/i
  },
  node: {
    label: 'NodeJS',
    regex: /\b(Node|NodeJS)\b/i
  }
}

// only counts top level comments. max 1 count per top level comment
export const jobStats = (htmlString) => {
  const htmlObject = document.createElement('div')
  htmlObject.innerHTML = htmlString

	var allComments = Array.from(htmlObject.querySelectorAll('.comment-tree .comtr'))
  var topLevelComments = allComments.filter(e => e.querySelector('img[width="0"]'))

  const results = {}

  Object.keys(techs).forEach(t => {
    results[t] = {
      label: techs[t].label,
      count: topLevelComments.filter(e => (techs[t].regex.test(e.querySelector('.comment').innerText) ? 'table-row' : 'none') === 'table-row').length
    }
  })
  
  return results
}