﻿using AspReactTestApp.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TurboazFetching.Entities;

namespace AspReactTestApp.Entities.Concrete.CarRelated
{
    public class CategoryLocale : IEntity
    {
        public int Id { get; set; }
        public int LanguageId { get; set; }
        public string Name { get; set; } = string.Empty;

        public Language? Language { get; set; }
        public Category? Category { get; set; }

        public CategoryLocale() { }
    }
}
