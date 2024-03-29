﻿using AspReactTestApp.Data.Core.Abstract;
using AspReactTestApp.Entities.Concrete;

namespace AspReactTestApp.Data.DataAccess.Abstract
{
    public interface IUserRepository : IGenericRepository<User>
    {
    }
}
