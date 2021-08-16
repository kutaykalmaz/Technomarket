using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using technomarket.application.Core;
using technomarket.application.DTOs.Category;
using technomarket.data;

namespace technomarket.application.Categories
{
    public class CategoryOptions
    {
        public class Query : IRequest<Result<List<CategoryOptionsDto>>>
        {

        }

        public class Handler : IRequestHandler<Query, Result<List<CategoryOptionsDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<List<CategoryOptionsDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var categories = await _context.Categories
                    .ProjectTo<CategoryOptionsDto>(_mapper.ConfigurationProvider)
                    .ToListAsync();
                
                return Result<List<CategoryOptionsDto>>.Success(categories);
            }
        }
    }
}