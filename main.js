$(document).ready(function(e){
  $.ajax({
    url: 'https://api.github.com/users/toddatkins01',
      data: {
        client_id: '31021091',
        client_secret: 'ac7dff740b30f6a2cf475b79b08e1bb36fdb33e2'
      }
    }).done(function(user){
  $.ajax({
    url: 'https://api.github.com/users/toddatkins01/repos',
      data: {
        client_id: '31021091',
        client_secret: 'ac7dff740b30f6a2cf475b79b08e1bb36fdb33e2',
        sort: 'created: asc',
        per_page: 3
      }
  }).done(function(repos){
    $.each(repos, function(index, repo){
      $('#repos').append(`
        <div class="projects">
          <div class="row">
            <div class="col-md-7">
              <h3>${repo.name}</h3>
              ${repo.description}
              <br><br>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-outline-secondary">Created Date: ${repo.created_at}</button>
              <br>
              <button type="button" class="btn btn-outline-secondary">Updated Date: ${repo.updated_at}</button>
            </div>
            <div class="col-md-2">
              <a href="${repo.html_url}" target="_blank" class="btn btn-secondary btn-block">Repo Page</a>  
            </div>
          </div>
        </div>
      `);
    });
  });
      $('#profile').html(`
      <div class="row">
        <div class="col-md-3">          
          <img class="thumbnail avatar" src="${user.avatar_url}">
          <br><br>
          <a target="_blank" href="${user.html_url}" class="btn btn-outline-secondary btn-block">View GitHub Profile</a>
        </div>  
            <div class="col-md-9">
              <table class="table table-striped table-hover table-bordered">
                <tbody>
                  <tr>
                    <td><h4>Company:</h4> <i>${user.company}</i></td>
                    <td><h4>Location:</h4> <i>${user.location}</i></td>
                  </tr>
                  <tr>
                    <td><h4>Public Repos:</h4> <i>${user.public_repos}</i></td>
                    <td><h4>GitHub Member Since:</h4> <i>${user.created_at}</i></td>
                  </tr>
                </tbody>
            </div>
      </div>          
      `);
    });
});