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
using technomarket.entity;

namespace technomarket.application.Products
{
    public class ProductList
    {
        public class Query : IRequest<Result<List<ProductDto>>> {}

        public class Handler : IRequestHandler<Query, Result<List<ProductDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<List<ProductDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var products = await _context.Products
                    .ProjectTo<ProductDto>(_mapper.ConfigurationProvider)
                    .ToListAsync();
                
                return Result<List<ProductDto>>.Success(products);
            }
        }
    }
}