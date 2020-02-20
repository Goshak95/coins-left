import React from 'react'
import { shallow } from 'enzyme'
import { SpendingsList } from '.'

describe('SpendingsList', () => {
  const props = {
    spendingsList: [
      {
        id: '5',
        title: 'Music subscription',
        cost: '150',
        category: '3',
        date: '2019-11-10T16:38:00',
      },
      {
        id: '14',
        title: 'Clothes',
        cost: '2000',
        category: '4',
        date: 1581240870143,
      },
      {
        id: '15',
        title: 'Cola',
        cost: '60',
        category: '2',
        date: 1582145701610,
      },
    ],
    categoriesList: [
      {
        id: '1',
        title: 'Uncategorized',
        icon_id: '1',
        icon_filename: 'label_tag_shopping_price_3668848',
      },
      {
        id: '2',
        title: 'Shop',
        icon_id: '4',
        icon_filename: 'shopping_shop_store_bag_3668838',
      },
      {
        id: '3',
        title: 'Entertainment',
        icon_id: '2',
        icon_filename: 'label_tag_shopping_price_3668848',
      },
      {
        id: '4',
        title: 'Clothes',
        icon_id: '3',
        icon_filename: 'clothes_tshirt_fashion_outfit_3668861',
      },
      {
        id: '5',
        title: 'Pharmacy',
        icon_id: '6',
        icon_filename: 'healthcare_medicine_expense_ambulance_3668853',
      },
      {
        id: '6',
        title: 'Home',
        icon_id: '7',
        icon_filename: 'house_home_flat_facilities_3668851',
      },
    ],
  }

  const spendingsList = shallow(<SpendingsList {...props} />)

  it('renders properly', () => {
    expect(spendingsList).toMatchSnapshot()
  })

  it('renders 3 spendings times', () => {
    expect(spendingsList.find('SpendingsItem')).toHaveLength(3)
  })

  describe('correct render for first spendings item', () => {
    const correctCategory = props.categoriesList.find(
      cat => cat.id == props.spendingsList[0].category
    )
    it('title is correct', () => {
      expect(
        spendingsList
          .find('SpendingsItem')
          .first()
          .shallow()
          .find('div.spending-item__title p')
          .text()
      ).toEqual(props.spendingsList[0].title)
    })
    it('category is correct', () => {
      expect(
        spendingsList
          .find('SpendingsItem')
          .first()
          .shallow()
          .find('.spending-item__category')
          .text()
      ).toEqual(correctCategory.title)
    })
    it('cost is correct', () => {
      expect(
        spendingsList
          .find('SpendingsItem')
          .first()
          .shallow()
          .find('.spending-item__cost')
          .text()
      ).toEqual(props.spendingsList[0].cost)
    })
    it('icon is correct', () => {
      expect(
        spendingsList
          .find('SpendingsItem')
          .first()
          .shallow()
          .find('.spending-item__icon')
          .prop('src')
      ).toEqual(`/images/icons/${correctCategory.icon_filename}.png`)
    })
  })
  describe('correct render for second spendings item', () => {
    const correctCategory = props.categoriesList.find(
      cat => cat.id == props.spendingsList[1].category
    )
    console.dir(spendingsList)
    console.dir(spendingsList.find('SpendingsItem').first())
    it('title is correct', () => {
      expect(
        spendingsList
          .find('SpendingsItem')
          .at(1)
          .shallow()
          .find('div.spending-item__title p')
          .text()
      ).toEqual(props.spendingsList[1].title)
    })
    it('category is correct', () => {
      expect(
        spendingsList
          .find('SpendingsItem')
          .at(1)
          .shallow()
          .find('.spending-item__category')
          .text()
      ).toEqual(correctCategory.title)
    })
    it('cost is correct', () => {
      expect(
        spendingsList
          .find('SpendingsItem')
          .at(1)
          .shallow()
          .find('.spending-item__cost')
          .text()
      ).toEqual(props.spendingsList[1].cost)
    })
    it('icon is correct', () => {
      expect(
        spendingsList
          .find('SpendingsItem')
          .at(1)
          .shallow()
          .find('.spending-item__icon')
          .prop('src')
      ).toEqual(`/images/icons/${correctCategory.icon_filename}.png`)
    })
  })
  describe('correct render for third spendings item', () => {
    const correctCategory = props.categoriesList.find(
      cat => cat.id == props.spendingsList[2].category
    )
    console.dir(spendingsList)
    console.dir(spendingsList.find('SpendingsItem').first())
    it('title is correct', () => {
      expect(
        spendingsList
          .find('SpendingsItem')
          .at(2)
          .shallow()
          .find('div.spending-item__title p')
          .text()
      ).toEqual(props.spendingsList[2].title)
    })
    it('category is correct', () => {
      expect(
        spendingsList
          .find('SpendingsItem')
          .at(2)
          .shallow()
          .find('.spending-item__category')
          .text()
      ).toEqual(correctCategory.title)
    })
    it('cost is correct', () => {
      expect(
        spendingsList
          .find('SpendingsItem')
          .at(2)
          .shallow()
          .find('.spending-item__cost')
          .text()
      ).toEqual(props.spendingsList[2].cost)
    })
    it('icon is correct', () => {
      expect(
        spendingsList
          .find('SpendingsItem')
          .at(2)
          .shallow()
          .find('.spending-item__icon')
          .prop('src')
      ).toEqual(`/images/icons/${correctCategory.icon_filename}.png`)
    })
  })
})
