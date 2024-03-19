const key = "c9f9481888ce40cb852f74a2549c1503";
let favourites = localStorage.getItem('favourites');
if (favourites === null) {
  favourites = [];
} else {
  favourites = JSON.parse(favourites);
}
function search() {
  const apiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" + key;
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const responseContainer = document.getElementById('response-container');
      responseContainer.innerHTML = ''; // Clear previous content

      data.articles.forEach(article => {
        console.log(data);
        let articleContent = '';

        // Check for existence of urlToImage and prioritize description
        if (article.urlToImage) {
          articleContent += `
                    <h2>${article.title}</h2>
                    <img src="${article.urlToImage}" alt="${article.title}">  <br>
                  `;
        }
        else
        {
          return;
        }

        // Use description if available, otherwise use content if it exists
        if (article.description) {
          articleContent += `<p>${article.description}</p>`;
        } else if (article.content) {
          
          const sanitizedContent = article.content.replace(/<[^>]+>/g, ''); // Basic sanitization (replace HTML tags)
          articleContent += `<p>${sanitizedContent}</p>`;
        }
        articleContent += `<a href="${article.url}" target="_blank">Articolo completo</a>`;
        responseContainer.innerHTML += `<article>${articleContent}</article>`;
      });

    })
    .catch(error => {
      console.error('Error:', error);
    });
}
//----------------------------------------------------BBC----------------------------------------------------
function BBC() {
  const apiUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=" + key;
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const responseContainer = document.getElementById('response-container');
      responseContainer.innerHTML = ''; // Clear previous content

      data.articles.forEach(article => {
        console.log(data);
        let articleContent = '';

        // Check for existence of urlToImage and prioritize description
        if (article.urlToImage) {
          articleContent += `
                    <h2>${article.title}</h2>
                    <img src="${article.urlToImage}" alt="${article.title}">  <br>
                  `;
        }

        // Use description if available, otherwise use content if it exists
        if (article.description) {
          articleContent += `<p>${article.description}</p>`;
        } else if (article.content) {
          // Handle potential HTML content within 'content' field
          const sanitizedContent = article.content.replace(/<[^>]+>/g, ''); // Basic sanitization (replace HTML tags)
          articleContent += `<p>${sanitizedContent}</p>`;
        }
        articleContent += `<a href="${article.url}" target="_blank">Articolo completo</a>`;
        responseContainer.innerHTML += `<article>${articleContent}</article>`;
      });

    })
    .catch(error => {
      console.error('Error:', error);
    });
}
//------------------------------------------------INDEX---------------------------------------------------------------
function Last() {
  const apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + key;
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const responseContainer = document.getElementById('response-container');
      responseContainer.innerHTML = ''; // Clear previous content

      data.articles.forEach(article => {
        console.log(data);
        let articleContent = '';

        // Check for existence of urlToImage and prioritize description
        if (article.urlToImage) {
          articleContent += `
                    <h2>${article.title}</h2>
                    <img src="${article.urlToImage}" alt="${article.title}">  <br>
                  `;
        }

        // Use description if available, otherwise use content if it exists
        if (article.description) {
          articleContent += `<p>${article.description}</p>`;
        } else if (article.content) {
          // Handle potential HTML content within 'content' field
          const sanitizedContent = article.content.replace(/<[^>]+>/g, ''); // Basic sanitization (replace HTML tags)
          articleContent += `<p>${sanitizedContent}</p>`;
        }
        articleContent += `<a href="${article.url}" target="_blank">Articolo completo</a>`;
        responseContainer.innerHTML += `<article>${articleContent}</article>`;
      });

    })
    .catch(error => {
      console.error('Error:', error);
    });
}
//-------------------------------------------------POLITICA--------------------------------------------------------------
function Politica() {
  const apiUrl = "https://newsapi.org/v2/top-headlines?category=politics&language=en&apiKey=" + key;
  fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const responseContainer = document.getElementById('response-container');
    responseContainer.innerHTML = ''; // Clear previous content

    data.articles.forEach(article => {
      console.log(data);
      let articleContent = '';

      // Check for existence of urlToImage and prioritize description
      if (article.urlToImage) {
        articleContent += `
                  <h2>${article.title}</h2>
                  <img src="${article.urlToImage}" alt="${article.title}">  <br>
                `;
      }

      // Use description if available, otherwise use content if it exists
      if (article.description) {
        articleContent += `<p>${article.description}</p>`;
      } else if (article.content) {
        // Handle potential HTML content within 'content' field
        const sanitizedContent = article.content.replace(/<[^>]+>/g, ''); // Basic sanitization (replace HTML tags)
        articleContent += `<p>${sanitizedContent}</p>`;
      }
      articleContent += `<a href="${article.url}" target="_blank">Articolo completo</a>`;
      responseContainer.innerHTML += `<article>${articleContent}</article>`;
    });

  })
  .catch(error => {
    console.error('Error:', error);
  });
}


function health() {
  const apiUrl = "https://newsapi.org/v2/everything?q=medicine&apiKey=" + key;
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const responseContainer = document.getElementById('response-container');
      responseContainer.innerHTML = ''; // Clear previous content

      data.articles.forEach(article => {
        console.log(data);
        let articleContent = '';

        // Check for existence of urlToImage and prioritize description
        if (article.urlToImage) {
          articleContent += `
                    <h2>${article.title}</h2>
                    <img src="${article.urlToImage}" alt="${article.title}">  <br>
                  `;
        }

        // Use description if available, otherwise use content if it exists
        if (article.description) {
          articleContent += `<p>${article.description}</p>`;
        } else if (article.content) {
          // Handle potential HTML content within 'content' field
          const sanitizedContent = article.content.replace(/<[^>]+>/g, ''); // Basic sanitization (replace HTML tags)
          articleContent += `<p>${sanitizedContent}</p>`;
        }
        articleContent += `<a href="${article.url}" target="_blank">Articolo completo</a>`;
        responseContainer.innerHTML += `<article>${articleContent}</article>`;
      });

    })
    .catch(error => {
      console.error('Error:', error);
    });
}
function sport() {
  const apiUrl = "https://newsapi.org/v2/everything?q=sport&apiKey=" + key;
  fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const responseContainer = document.getElementById('response-container');
    responseContainer.innerHTML = ''; // Clear previous content

    data.articles.forEach(article => {
      console.log(data);
      let articleContent = '';

      // Check for existence of urlToImage and prioritize description
      if (article.urlToImage) {
        articleContent += `
                  <h2>${article.title}</h2>
                  <img src="${article.urlToImage}" alt="${article.title}">  <br>
                `;
      }

      // Use description if available, otherwise use content if it exists
      if (article.description) {
        articleContent += `<p>${article.description}</p>`;
      } else if (article.content) {
        // Handle potential HTML content within 'content' field
        const sanitizedContent = article.content.replace(/<[^>]+>/g, ''); // Basic sanitization (replace HTML tags)
        articleContent += `<p>${sanitizedContent}</p>`;
      }
      articleContent += `<a href="${article.url}" target="_blank">Articolo completo</a>`;
      responseContainer.innerHTML += `<article>${articleContent}</article>`;
    });

  })
  .catch(error => {
    console.error('Error:', error);
  });
}
fetch(localHost + "/BBC")