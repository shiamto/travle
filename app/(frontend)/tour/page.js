"use client";
import React from 'react';
import { Form, Row, Col, Button } from 'antd';
import FormImage from '../../components/common/image';
import { FiTrash } from 'react-icons/fi';
import FormInput from '../../components/form/input';


const dummyData = [
	{
		"name": "Kashmir Tours",
		"category_id": 1,
		"duration": "4D/5N",
		"explorer": "SN",
		"duration_details": "4 Days and 5 nights 3 Cities countries",
		"locations": [
			"locations one",
			"locations 2",
			"locations 3"
		],
		"min_day": 4,
		"start_end_city": "Mumbai",
		"start_price": 110000,
		"discount": 10,
		"is_percentage_discount": 1,
		"highlights": "summornote textarea use korte hbe",
		"notes": "summornote textarea use korte hbe, follow tour details page",
		"hotels": [
			{
				"place": "PORT BLAIR",
				"name": "HOTEL SEA PRINCESS or Similar",
				"nights": 1
			},
			{
				"place": "PORT BLAIR",
				"name": "HOTEL SEA PRINCESS or Similar",
				"nights": 2
			}
		],
		"Hotel_notes": "Under unavoidable circumtances Hotels are subject to change, in such condition substitute hotel of similar category is provided",
		"images": [
			1,
			2
		],
		"places": [
			{
				"image_id": 1,
				"name": "Kashmir"
			},
			{
				"image_id": 2,
				"name": "Kashmir2"
			}
		],
		"destinations": [
			{
				"name": "Kashmir",
				"lat": 23.7810672,
				"lng": 90.2548719
			},
			{
				"name": "Kashmir2",
				"lat": 23.7810672,
				"lng": 90.2548719
			}
		],
		"itineraries": [
			{
				"from": "01-10-2023",
				"to": "29-12-2024"
			},
			{
				"from": "01-05-2024",
				"to": "31-10-2024"
			}
		],
		"plans": [
			{
				"day": 1,
				"description": "summernote textarea",
				"meal": [
					"Breakfas",
					"Lunch",
					"Dinner"
				],
				"extra_topping": "Tea, Coffe"
			},
			{
				"day": 2,
				"description": "summernote textarea",
				"meal": [
					"Lunch",
					"Dinner"
				],
				"extra_topping": ""
			}
		],
		"departures": [
			{
				"from": "01-10-2023",
				"to": "29-12-2024",
				"time": "12:00pm"
				// --- skip------
				// "duration": "4D/5N",
				// "price":110000,
				// "offer_price":100000
			},
			{
				"from": "01-10-2023",
				"to": "29-12-2024",
				"time": "12:00pm"
				// --- skip------
				// "duration": "4D/5N",
				// "price":110000,
				// "offer_price":100000
			}
		]
	}
]

const TourPage = () => {
	const [form] = Form.useForm()

	return (
		<div className="container">
			<div className='bg-white shadow-lg p-4'>
				<Form form={form} layout='vertical' onFinish={(values) => {
					const data = {
						name: values.name,
						category_id: values.category_id,
						duration: values.duration,
						explorer: values.explorer,
						duration_details: JSON.stringify(values.duration_details),
						locations: values?.locations?.map((location) => location),
						min_day: values.min_day,
						start_end_city: values.start_end_city,
						start_price: values.start_price,
						discount: values.discount,
						is_percentage_discount: values.is_percentage_discount,
						highlights: values.highlights,
						notes: values.notes,
						hotels: values?.hotels?.map((hotel) => hotel),
						Hotel_notes: values.Hotel_notes,
						images: values?.images?.map((image) => image),
						places: values?.places?.map((place) => place),
						destinations: values?.destinations?.map((destination) => destination),
						itineraries: values?.itineraries?.map((itinerary) => itinerary),
						plans: values?.plans?.map((plan) => plan),
						departures: values?.departures?.map((departure) => departure),

					}

					console.log("data", data)
				}}>
					{/* Hero Section */}


					<h1 className='text-2xl font-bold'>Hero Section</h1>
					<div>
						<div>
							<Form.Item name={['name']} label="Name">
								<FormInput />
							</Form.Item>
						</div>
						<div className="grid grid-cols-1 md:grid-col-2 gap-x-4">
							<Form.Item name={['category_id']} label="Category">
								<FormInput />
							</Form.Item>
							<Form.Item name={['duration']} label="Duration">
								<FormInput />
							</Form.Item>
						</div>
					</div>


					<h2 className='text-lg font-bold'>Card</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-x-4'>
						<div>
							<Form.Item name={['explorer']} label="Explorer">
								<FormInput />
							</Form.Item>
						</div>
						<div>
							<Form.Item name={['duration_details']} label="Duration Details">
								<FormInput textArea={true} />
							</Form.Item>
						</div>
					</div>


					<div>
						<Form.List label="Locations" name={['locations']}>
							{(fields, { add, remove }) => (
								<>
									{fields.map(({ key, name }) => (
										<div key={key} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name]}
													label="Location"
												>
													<FormInput />
												</Form.Item>
											</div>
											<div className="col-span-1">
												<FiTrash
													onClick={() => remove(name)}
													className="mt-2.5 text-danger cursor-pointer"
													role="button" size={18}
													title='Remove file'
												/>
											</div>
										</div>
									))}
									<Button type="button" className='bg-secondary text-white' onClick={() => add()}>Add</Button>
								</>
							)}
						</Form.List>
					</div>

					<div>
						<Form.Item name={['min_day']} label="Min Day">
							<FormInput />
						</Form.Item>
					</div>

					<div>
						<Form.Item name={['start_end_city']} label="Start End City">
							<FormInput />
						</Form.Item>
					</div>

					<div>
						<Form.Item name={['start_price']} label="Start Price">
							<FormInput />
						</Form.Item>
					</div>

					<div>
						<Form.Item name={['discount']} label="Discount">
							<FormInput />
						</Form.Item>
					</div>

					<div>
						<Form.Item name={['is_percentage_discount']} label="Is Percentage Discount">
							<FormInput />
						</Form.Item>
					</div>

					<div>
						<Form.Item name={['highlights']} label="Highlights">
							<FormInput textArea={true} />
						</Form.Item>
					</div>

					<div>
						<Form.Item name={['notes']} label="Notes">
							<FormInput textArea={true} />
						</Form.Item>
					</div>

					<div>
						<Form.List label="Hotels" name={['hotels']}>
							{(fields, { add, remove }) => (
								<>
									{fields.map(({ key, name }) => (
										<div key={key} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'place']}
													label="Place"
												>
													<FormInput />
												</Form.Item>
											</div>

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'name']}
													label="Name"
												>
													<FormInput />
												</Form.Item>
											</div>

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'nights']}
													label="Nights"
												>
													<FormInput />
												</Form.Item>
											</div>

											<div className="col-span-1">
												<FiTrash
													onClick={() => remove(name)}
													className="mt-2.5 text-danger cursor-pointer"
													role="button" size={18}
													title='Remove file'
												/>
											</div>
										</div>
									))}
									<Button type="button" className='bg-secondary text-white' onClick={() => add()}>Add</Button>
								</>
							)}
						</Form.List>
					</div>

					<div>

						<Form.Item name={['Hotel_notes']} label="Hotel Notes">
							<FormInput textArea={true} />
						</Form.Item>
					</div>

					<div>
						<Form.List label="Images" name={['images']}>
							{(fields, { add, remove }) => (
								<>
									{fields.map(({ key, name }) => (
										<div key={key} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name]}
													label="Image"
												>
													<FormInput />
												</Form.Item>
											</div>
											<div className="col-span-1">
												<FiTrash
													onClick={() => remove(name)}
													className="mt-2.5 text-danger cursor-pointer"
													role="button" size={18}
													title='Remove file'
												/>
											</div>
										</div>
									))}
									<Button type="button" className='bg-secondary text-white' onClick={() => add()}>Add</Button>
								</>
							)}

						</Form.List>
					</div>

					<div>
						<Form.List label="Places" name={['places']}>
							{(fields, { add, remove }) => (
								<>
									{fields.map(({ key, name }) => (
										<div key={key} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'image_id']}
													label="Image"
												>
													<FormInput />
												</Form.Item>
											</div>

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'name']}
													label="Name"
												>
													<FormInput />
												</Form.Item>
											</div>

											<div className="col-span-1">
												<FiTrash
													onClick={() => remove(name)}
													className="mt-2.5 text-danger cursor-pointer"
													role="button" size={18}
													title='Remove file'
												/>
											</div>
										</div>
									))}
									<Button type="button" className='bg-secondary text-white' onClick={() => add()}>Add</Button>
								</>
							)}
						</Form.List>
					</div>

					<div>
						<Form.List label="Destinations" name={['destinations']}>
							{(fields, { add, remove }) => (
								<>
									{fields.map(({ key, name }) => (
										<div key={key} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'name']}
													label="Name"
												>
													<FormInput />
												</Form.Item>
											</div>

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'lat']}
													label="Lat"
												>
													<FormInput />
												</Form.Item>
											</div>

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'lng']}
													label="Lng"
												>
													<FormInput />
												</Form.Item>
											</div>

											<div className="col-span-1">
												<FiTrash
													onClick={() => remove(name)}
													className="mt-2.5 text-danger cursor-pointer"
													role="button" size={18}
													title='Remove file'
												/>
											</div>
										</div>
									))}
									<Button type="button" className='bg-secondary text-white' onClick={() => add()}>Add</Button>
								</>
							)}
						</Form.List>
					</div>

					<div>
						<Form.List label="Itineraries" name={['itineraries']}>
							{(fields, { add, remove }) => (
								<>
									{fields.map(({ key, name }) => (
										<div key={key} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'from']}
													label="From"
												>
													<FormInput />
												</Form.Item>
											</div>

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'to']}
													label="To"
												>
													<FormInput />
												</Form.Item>
											</div>

											<div className="col-span-1">
												<FiTrash
													onClick={() => remove(name)}
													className="mt-2.5 text-danger cursor-pointer"
													role="button" size={18}
													title='Remove file'
												/>
											</div>
										</div>
									))}
									<Button type="button" className='bg-secondary text-white' onClick={() => add()}>Add</Button>
								</>
							)}
						</Form.List>
					</div>

					<div>
						<Form.List label="Plans" name={['plans']}>
							{(fields, { add, remove }) => (
								<>
									{fields.map(({ key, name }) => (
										<div key={key} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'day']}
													label="Day"
												>
													<FormInput />
												</Form.Item>
											</div>

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'description']}
													label="Description"
												>
													<FormInput textArea={true} />
												</Form.Item>
											</div>

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'meal']}
													label="Meal"
												>
													<FormInput />
												</Form.Item>
											</div>

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'extra_topping']}
													label="Extra Topping"
												>
													<FormInput />
												</Form.Item>
											</div>

											<div className="col-span-1">
												<FiTrash
													onClick={() => remove(name)}
													className="mt-2.5 text-danger cursor-pointer"
													role="button" size={18}
													title='Remove file'
												/>
											</div>
										</div>
									))}
									<Button type="button" className='bg-secondary text-white' onClick={() => add()}>Add</Button>
								</>
							)}
						</Form.List>
					</div>

					<div>
						<Form.List label="Departures" name={['departures']}>
							{(fields, { add, remove }) => (
								<>
									{fields.map(({ key, name }) => (
										<div key={key} className="grid grid-cols-1 md:grid-cols-5 items-center gap-4">

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'from']}
													label="From"
												>
													<FormInput />
												</Form.Item>
											</div>

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'to']}
													label="To"
												>
													<FormInput />
												</Form.Item>
											</div>

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'time']}
													label="Time"
												>
													<FormInput />
												</Form.Item>
											</div>

											{/* <div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'duration']}
													label="Duration"
												>
													<FormInput />
												</Form.Item>
											</div> */}

											{/* <div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'price']}
													label="Price"
												>
													<FormInput />
												</Form.Item>
											</div> */}

											{/* <div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'offer_price']}
													label="Offer Price"
												>
													<FormInput />
												</Form.Item>
											</div> */}

											<div className="col-span-1">
												<FiTrash
													onClick={() => remove(name)}
													className="mt-2.5 text-danger cursor-pointer"
													role="button" size={18}
													title='Remove file'
												/>
											</div>
										</div>
									))}
									<Button type="button" className='bg-secondary text-white' onClick={() => add()}>Add</Button>
								</>
							)}	
						</Form.List>
					</div>

					{/* Submit Button */}
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Save Changes
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default TourPage;
