using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using technomarket.application.Core;
using technomarket.application.DTOs;
using technomarket.data;

namespace technomarket.application.Categories
{
    public class CategoryList
    {
        public class Query : IRequest<Result<List<CategoryDto>>>
        {
            
        }

        public class Handler : IRequestHandler<Query, Result<List<CategoryDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<List<CategoryDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var categories = await _context.Categories
                    .ProjectTo<CategoryDto>(_mapper.ConfigurationProvider)
                    .ToListAsync();
                return Result<List<CategoryDto>>.Success(categories);
            }
        }
    }
}