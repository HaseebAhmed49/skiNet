using System;
using API.DTOs;
using Core.Entities;

namespace API.Extensions;

public static class AddressMappingExtensions
{
    public static AddressDTO ToDTO(this Address? address)
    {
        if (address == null) return null;

        return new AddressDTO
        {
            Line1 = address.Line1,
            Line2 = address.Line2,
            City = address.City,
            State = address.State,
            PostCode = address.PostCode,
            Country = address.Country,
        };
    }

    public static Address ToEntity(this AddressDTO addressDTO)
    {
        if (addressDTO == null) throw new ArgumentNullException(nameof(addressDTO));

        return new Address
        {
            Line1 = addressDTO.Line1,
            Line2 = addressDTO.Line2,
            City = addressDTO.City,
            State = addressDTO.State,
            PostCode = addressDTO.PostCode,
            Country = addressDTO.Country,
        };
    }

    public static void UpdateFromDTO(this Address address, AddressDTO addressDTO)
    {
        if (addressDTO == null) throw new ArgumentNullException(nameof(addressDTO));
        if (address == null) throw new ArgumentNullException(nameof(address));

        address.Line1 = addressDTO.Line1;
        address.Line2 = addressDTO.Line2;
        address.City = addressDTO.City;
        address.State = addressDTO.State;
        address.PostCode = addressDTO.PostCode;
        address.Country = addressDTO.Country;
    }
}
