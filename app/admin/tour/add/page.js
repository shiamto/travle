"use client";
import React, { useState } from 'react';
import { Form, Row, Col, Button, TimePicker } from 'antd';
import FormImage from '../../../components/common/image';
import { FiTrash } from 'react-icons/fi';
import FormInput from '../../../components/form/input';
import FormDatePicker from '../../../components/form/date_picker';
import { useAction, useFetch } from '../../../helpers/hooks';
import { fetchAdminTourList, postAdminTour } from '../../../helpers/backend';


const TourPage = () => {
	const [form] = Form.useForm()
	const [tourData, getTourData] = useFetch(fetchAdminTourList)
	console.log("🚀 ~ TourPage ~ tourData:", tourData)

	return (
		<div className="">
			<div className='bg-white shadow-lg p-4'>
				<Form form={form} layout='vertical' onFinish={(values) => {
					// const data = {
					// 	name: values.name,
					// 	category_id: values.category_id,
					// 	duration: values.duration,
					// 	explorer: values.explorer,
					// 	duration_details: JSON.stringify(values.duration_details),
					// 	locations: values?.locations?.map((location) => location),
					// 	min_day: values.min_day,
					// 	start_end_city: values.start_end_city,
					// 	start_price: values.start_price,
					// 	discount: values.discount,
					// 	is_percentage_discount: values.is_percentage_discount,
					// 	highlights: values.highlights,
					// 	notes: values.notes,
					// 	hotels: values?.hotels?.map((hotel) => hotel),
					// 	Hotel_notes: values.Hotel_notes,
					// 	images: values?.images?.map((image) => image),
					// 	places: values?.places?.map((place) => place),
					// 	destinations: values?.destinations?.map((destination) => destination),
					// 	itineraries: values?.itineraries?.map((itinerary) => itinerary),
					// 	plans: values?.plans?.map((plan) => plan),
					// 	departures: values?.departures?.map((departure) => departure),

					// }

					return useAction(postAdminTour, { ...values }, () => {
						getTourData()
					})
				}}>
					{/* Hero Section */}


					<h1 className='text-2xl font-bold'>Add Tour</h1>
					<div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-x-4'>
						<div className=''>
							<Form.Item name={['name']} label="Name">
								<FormInput />
							</Form.Item>
						</div>

						<div className=''>
							<Form.Item name={['duration']} label="Duration">
								<FormInput />
							</Form.Item>
						</div>

						<div className=''>
							<Form.Item name={['explorer']} label="Explorer">
								<FormInput />
							</Form.Item>
						</div>
					</div>

					<h2 className='text-lg font-bold'>Duration Details</h2>
					<div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-x-4'>
						<div className=''>
							<Form.Item name={['duration_details', 'days']} label="Total Days">
								<FormInput />
							</Form.Item>
						</div>

						<div className=''>
							<Form.Item name={['duration_details', 'countries']} label="How Many Countries">
								<FormInput />
							</Form.Item>
						</div>

						<div className=''>
							<Form.Item name={['duration_details', 'cities']} label="How Many Cities">
								<FormInput />
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
													className="mt-2.5 text-secondary cursor-pointer"
													role="button" size={18}
													title='Remove file'
												/>
											</div>
										</div>
									))}
									<Button type="button" className='bg-indigo-400 text-white' onClick={() => add()}>+ Add Location</Button>
								</>
							)}
						</Form.List>
					</div>

					<div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-x-4'>
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
					</div>


					<div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-x-4'>
						<div>
							<Form.Item name={['offer_name']} label="Offer Name">
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
					</div>

					<div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-x-4'>
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
													className="mt-2.5 text-secondary cursor-pointer"
													role="button" size={18}
													title='Remove file'
												/>
											</div>
										</div>
									))}
									<Button type="button" className='bg-indigo-400 text-white' onClick={() => add()}>+ Add Hotels</Button>
								</>
							)}
						</Form.List>
					</div>

					<div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-x-4'>
						<div>
							<Form.Item name={['Hotel_notes']} label="Hotel Notes">
								<FormInput textArea={true} />
							</Form.Item>
						</div>

						<div>
							<FormImage name={['images']} label="Images" />

						</div>
					</div>

					<div>
						<Form.List label="Places" name={['places']}>
							{(fields, { add, remove }) => (
								<>
									{fields.map(({ key, name }) => (
										<div key={key} className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4">

											<div className="col-span-1 mt-4">
												<FormImage name={[name, 'image_id']}
													label="Image" />
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
													className="mt-2.5 text-secondary cursor-pointer"
													role="button" size={18}
													title='Remove file'
												/>
											</div>
										</div>
									))}
									<Button type="button" className='bg-indigo-400 text-white' onClick={() => add()}>+ Add Places</Button>
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
													className="mt-2.5 text-secondary cursor-pointer"
													role="button" size={18}
													title='Remove file'
												/>
											</div>
										</div>
									))}
									<Button type="button" className='bg-indigo-400 text-white' onClick={() => add()}>+ Add Destinations</Button>
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
													className="mt-2.5 text-secondary cursor-pointer"
													role="button" size={18}
													title='Remove file'
												/>
											</div>
										</div>
									))}
									<Button type="button" className='bg-indigo-400 text-white' onClick={() => add()}>+ Add Itineraries</Button>
								</>
							)}
						</Form.List>
					</div>

					{/* <div>
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
													className="mt-2.5 text-secondary cursor-pointer"
													role="button" size={18}
													title='Remove file'
												/>
											</div>
										</div>
									))}
									<Button type="button" className='bg-indigo-400 text-white' onClick={() => add()}>+ Add Plans</Button>
								</>
							)}
						</Form.List>
					</div> */}

					<Form.List label="Plans" name={['plans']}>
						{(fields, { add, remove }) => (
							<>
								{fields.map(({ key, name }) => (
									<div key={key} className="grid grid-cols-1 md:grid-cols-5 items-center gap-4">
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
											<Form.List name={[name, 'meal']} label="Meal">
												{(mealFields, mealOps) => (
													<>
														{mealFields.map(({ key: pointsKey, name: mealsName, fieldKey, ...rest }) => (
															<Form.Item
																{...rest}
																key={pointsKey}
																label="Meal"
															>
																<FormInput name={[mealsName]} placeholder="Write something.." required />
															</Form.Item>
														))}
														<Button
															type="button"
															className='bg-indigo-400 text-white'
															onClick={() => mealOps.add()}
														>
															Add Meal
														</Button>
													</>
												)}
											</Form.List>
										</div>

										<div className="col-span-1 mt-4">
											<Form.Item
												name={['extra_topping']}
												label="Extra Topping"
											>
												<FormInput />
											</Form.Item>
										</div>

										<div className="col-span-1">
											<FiTrash
												onClick={() => remove(name)}
												className="mt-2.5 text-secondary cursor-pointer"
												role="button" size={18}
												title='Remove file'
											/>
										</div>
									</div>
								))}
								<Button type="button" className='bg-indigo-400 text-white' onClick={() => add()}>+ Add Plans</Button>
							</>
						)}
					</Form.List>

					<div>
						<Form.List label="Departures" name={['departures']}>
							{(fields, { add, remove }) => (
								<>
									{fields.map(({ key, name }) => (
										<div key={key} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'from']}
													label="From"
												>
													<FormDatePicker />
												</Form.Item>
											</div>

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'to']}
													label="To"
												>
													<FormDatePicker />
												</Form.Item>
											</div>

											<div className="col-span-1 mt-4">
												<Form.Item
													name={[name, 'time']}
													label="Time"
												>
													<TimePicker defaultValue={null} format={'HH:mm'} />
												</Form.Item>
											</div>

											<div className="col-span-1">
												<FiTrash
													onClick={() => remove(name)}
													className="mt-2.5 text-secondary cursor-pointer"
													role="button" size={18}
													title='Remove file'
												/>
											</div>
										</div>
									))}
									<Button type="button" className='bg-indigo-400 text-white' onClick={() => add()}>+ Add Departures</Button>
								</>
							)}
						</Form.List>
					</div>

					{/* Submit Button */}
					<Form.Item>
						<Button className='bg-indigo-500 text-white mt-2' type='primary' htmlType='submit'>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default TourPage;
