
using System.Web.Http;
using NestCam.API.Models;
using System.Web.Http.Cors;

namespace NestCam.API.Controllers
{
    [EnableCors(origins: "http://localhost:8100", headers: "*", methods: "*")]
    public class UsersController : ApiController
    {
        // POST: api/user/login
        [HttpPost]
        [Route("api/users/login")]
        public UserModel Login()
        {
            var user = new UserModel();
            user.id = 1;
            user.name = "Joe Yeremuk";
            user.email = "iiyeremu@uncc.edu";
            user.isLoggedIn = true;

            return user;
        }
    }
}
